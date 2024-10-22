import './App.css'
import { ImcCalc } from './Components/ImcCalc'
import { ImcTable } from './Components/ImcTable'
import { useState } from 'react'
import { data } from './data/data'

function App() {
  const calcImc = (e, height, width) => {
    e.preventDefault()
    console.log(height, width)
    if (!width || !height) return;
    const widthFloat = +width.replace(",", ".");
    const heightfloat = +height.replace(",", ".")

    const imcResult = (widthFloat /(heightfloat * heightfloat)).toFixed(1)
    setImc(imcResult)
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <>
      <div className='container'>
        {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} />}
      </div>
    </>
  )
}
export default App
  
    

