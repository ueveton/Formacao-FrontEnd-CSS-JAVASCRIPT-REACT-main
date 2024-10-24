import './App.css'
import { ImcCalc } from './Components/ImcCalc'
import { ImcTable } from './Components/ImcTable'
import { useState } from 'react'
import {data} from './data/data'

function App() {
  const calcImc = (e, height, width) => {
    e.preventDefault()
    console.log(height, width)
    if (!width || !height) return;
    const widthFloat = +width.replace(",", ".");
    const heightFloat = +height.replace(",", ".")

    const imcResult = (widthFloat /(heightFloat * heightFloat)).toFixed(1)
    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    });
    if (!info) return
  }

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <>
      <div className='container'>
        {!imc ? 
          (<ImcCalc calcImc={calcImc} /> )
            : 
          (<ImcTable data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc} />)
        }
      </div>
    </>
  )
}
export default App
  
    

