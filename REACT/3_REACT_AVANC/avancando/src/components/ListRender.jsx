import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Heitor", "Ueveton", "Carol"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Heitor Da Silva", age: 10},
        {id: 2, name: "Ueveton Soares", age: 34},
        {id: 3, name: "Carol Da Silva", age: 28}
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random()*4);

        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id)
        );
    };

  return (
    <div>
        <div>
            <ul>
                {list.map((item) =>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
        <ul>
            {users.map((user) =>(
                <li key={user.id}>
                    {user.name} {user.age} anos
                </li>
            ))}
        </ul>
            {/* 6 previos states */}
            <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender