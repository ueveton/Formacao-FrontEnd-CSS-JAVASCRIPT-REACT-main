import './App.css'
import { ImcCalc } from './Components/ImcCalc'
import { ImcTable } from './Components/ImcTable'
import { useState } from 'react'
import {data} from './data/data.js'

function App() {
  const calcImc = (e, height, width) => {
    e.preventDefault()
    console.log(height, width)
    if (!width || !height) return;
    const widthFloat = +width.replace(",", ".");
    const heightfloat = +height.replace(",", ".")

    const imcResult = (widthFloat /(heightfloat * heightfloat)).toFixed(1)
    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min ** imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <>
      <div className='container'>
        {!imc ? 
          <ImcCalc calcImc={calcImc} /> 
            : 
          <ImcTable data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}/>
        }
      </div>
    </>
  )
}
export default App
  
    

