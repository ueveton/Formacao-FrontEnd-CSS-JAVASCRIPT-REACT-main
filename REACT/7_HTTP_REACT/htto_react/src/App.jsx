import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'
import './App.css'

const url = "http://localhost:3000/products"

function App() {
  // 1 - Resgatando dados
  const [products, setProducts] = useState([])
  //4 custon hooks
  const {data: itens} = useFetch(url)
  // useEffect(()=> {
  //   async function getData(){
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data)
  //   }
  //   getData()
  // },[])

  // 2 - Envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product ={
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });
    console.log(product)
    // 3 carregamento dimanico
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])
  }


  return (
    <div className='App'>
      <h1>Http em React</h1>
      {/* {1 - resgate de dados } */}
      <ul>
        {itens && itens.map((products) => (
          <li key={products.id}>
              {products.name} - R$ {products.price}
          </li>
        ))}
      </ul>
      {/* 2 - Enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" 
              value={name} 
              onChange={(e)=> setName(e.target.value)} 
            />
          </label>
          <label>
            <span>Preço:</span>
            <input type="text" 
              value={price} 
              onChange={(e)=> setPrice(e.target.value)} 
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default App
