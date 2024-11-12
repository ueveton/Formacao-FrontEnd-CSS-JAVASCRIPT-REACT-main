import { useState, useEffect } from 'react'
import './App.css'

const url = "http://localhost:3000/products"

function App() {
  // 1 - Resgatando dados
  const [products, setProducts] = useState([])

  useEffect(()=> {
    async function getData(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data)
    }
    getData()
  },[])

  // 2 - Envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  return (
    <div className='App'>
      <h1>Http em React</h1>
      {/* {1 - resgate de dados } */}
      <ul>
        {products.map((products) => (
          <li key={products.id}>
              {products.name} - R$ {products.price}
          </li>
        ))}
      </ul>
      {/* 2 - Enviando dados */}
      <div className="add-product">
        <form>
          <label>
            <span>Nome:</span>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
          </label>
          <label>
            <span>Preço:</span>
            <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default App
