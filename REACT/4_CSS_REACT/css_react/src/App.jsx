import './App.css'
// 2 - css de compomentes
import { MyComponents } from './components/MyComponents'
import { Title } from './components/Title';

function App() {

  const n = 15;

  const redTitle = true;
  return (
    <>
      <h1>CSS React</h1>
      {/* { 2 - css de compomentes} */}
      <MyComponents />
      {/* {3 style} */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilos inline</p>
        {/* {4 style dinamico} */}
        <h2 style={n > 10 ? {color: "purple"} : {color: "blue"} }>
          CSS Dinamico
        </h2>
        <h2 style={n > 20 ? {color: "purple"} : {color: "blue"} }>
          CSS Dinamico
        </h2>
        {/* {classes dinamicas} */}
        <h2 className={redTitle ? "redTitle" : "title"}>Este titulo vai ter uma classe</h2>
        <Title />
    </>
  )
}

export default App
