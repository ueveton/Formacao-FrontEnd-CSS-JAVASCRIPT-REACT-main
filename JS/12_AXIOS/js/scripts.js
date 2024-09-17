// 2 - Primeiro request

const getData = async () => {
	try {
		const response = await postFetch.get(
			"/users",
			//4 - definindo headers
			{
				headers: {
					"Content-Type": "application/json",
					custon: "header",
				}
			}
		);
		console.log(response)
		return response.data;
	} catch (err) {
		console.log(err)
	}

};

getData();

// no html criar div id user-container
//3 - imprimindo dados na tela
console.log("------ 3 - imprimindo dados na tela -----");
const container = document.querySelector("#user-container")

const printData = async() => {
	const data = await getData();
	console.log(data);

	data.forEach((user)=>{
		//criando lista de nome
		const div = document.createElement("div")
		const nameElement = document.createElement("h2");
		nameElement.textContent = user.name;
		div.appendChild(nameElement);
		//criando lista de email
		const emailElement = document.createElement("p");
		emailElement.textContent = user.email;
		div.appendChild(emailElement);

		container.appendChild(div)
	})
};

printData()

// 5 - post
console.log("------ 5 - Post -----");
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    postFetch.post("/posts", {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1,
    });
});