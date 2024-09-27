const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input")
const eraseBtn = document.querySelector("#erase-button")
const filterBtn = document.querySelector("#filter-select")

let oldInputValue;

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue){
        saveTodo(inputValue)
    }
})

const saveTodo = (text, done = 0, save = 1) =>{
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-todo");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(removeBtn)

    // utilizando dados do localStorage
    if(done){
        todo.classList.add("done")
    }
    if (save){
        saveTodoLocalStorage({text, done})
    }

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();
}

document.addEventListener("click", (e)=>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done")
    }

    if (targetEl.classList.contains("edit-todo")){
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

    if (targetEl.classList.contains("remove-todo")){
        parentEl.remove()
        removeTodoLocalStorage(todoTitle);
    }
})

const toggleForms = () =>{
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

cancelEditBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    toggleForms();
})

editForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const editInputValue = editInput.value

    if(editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()
})

updateTodo = (editInputValue) =>{
    const todos = document.querySelectorAll(".todo")
    todos.forEach((todo)=>{
        let todoTitle = todo.querySelector("h3")
        if (todoTitle.innerText === oldInputValue){
            todoTitle.innerText = editInputValue
        }
    })
}

// buscar por palavra
searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
    getSearchTodos(search);
})

getSearchTodos = (search) =>{
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo)=>{
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase();
        const normalizedSearch = search.toLowerCase();
        todo.style.display = "flex";
        if(!todoTitle.includes(normalizedSearch)){
            todo.style.display = "none";
        }
    })
}

eraseBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("keyup"));
})

// filtar tarefas
filterBtn.addEventListener("change", (e) =>{
    const filterValue = e.target.value;
    filterTodos(filterValue)
})

filterTodos = (filterValue) =>{
    const todos = document.querySelectorAll(".todo");
    switch (filterValue) {
        case "all":
            todos.forEach((todo) => (todo.style.display = "flex"));
            break;
        case "done":
            todos.forEach((todo) => 
                todo.classList.contains("done")
                ? (todo.style.display = "flex") 
                : (todo.style.display = "none")
            );
            break;
        case "todo":
            todos.forEach((todo) => 
                !todo.classList.contains("done")
                ? (todo.style.display = "flex") 
                : (todo.style.display = "none")
            );
            break;
        default:
            break;
    }
};

// localstorage
const saveTodoLocalStorage = (todo) =>{
    // todos os todos no localStorage
    const todos = getTodoLocalStorage()
    // add o novo todo
    todos.push(todo);
    // salvar todo no localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
}

getTodoLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
}

loadTodos = () => {
    const todos = getTodoLocalStorage();
    todos.forEach((todo) =>{
        saveTodo(todo.text, todo.done, 0)
    })
}

removeTodoLocalStorage = (todoText) =>{
    const todos = getTodoLocalStorage();
    const filteredTodos = todo.filter(() =>{
        todo.text !== todoText
    })
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
}

loadTodos()