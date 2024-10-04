import './App.css';
// 2 - imagem em assets
import ImgNight from './assets/night.jpg';

// 3 - use states
import Data from './components/Data';

// 4 - list usestates
import ListRender from './components/ListRender';

// 7 condiciona render
import ConditionalRender from './components/ConditionalRender';

// 9 props
import ShowUserName from './components/ShowUserName';

// 10 destruction props
import CarDetails from './components/CarDetails';

// 11 renderizacao de listas com compomente
const cars = [
  {id: 1, brand: "ford", color: "branco", km: 0},
  {id: 2, brand: "chevrolet", color: "prata", km: 13576},
  {id: 1, brand: "renault", color: "preto", km: 87643},

]

// 12 fragment
import Fragment from './components/Fragment';
import { Children } from 'react';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import  { ChangeMessage } from './components/ChangeMessage';

function App() {

  // 14 - funcao em props
  function showMessage() {
    console.log("Evento do compomente pai")
  };
  // 15 - state lift
  const [message, setMessage] = useState("");
  const handleMessage = (msg) =>{
    setMessage(msg);
  };
  return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avancando em React</h1>
        {/* {1 - imagem em public} */}
        <img src="/img.jpg" alt="Imagem em public" />
        {/* {2-imagem do assets import} */}
        <img src={ImgNight} alt="Imagem em assets" />
        {/* 3 - useStates */}
        <Data />
        {/* {4 list useStates} */}
        <ListRender />
        {/* {7 condicional render} */}
        <ConditionalRender />
        {/* {9 props} */}
        <ShowUserName name="Heitor" />
        {/* {10 destruction props} */}
        <CarDetails brand ="fiesta" km ={322435} color = "Prata" />
        {/* {11 reaproveitar compoment} */}
        <CarDetails brand ="vw" km ={34697} color = "Branco" />
        <CarDetails brand ="fiat" km ={574123} color = "Preto" />
        <CarDetails brand ="skyline" km ={513475} color = "azul" />
        {/* {// renderizacao de listas com compomente} */}
        {cars.map((car) =>(
          <CarDetails key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          />
        ))}
        {/* {12 fragment} */}
        <Fragment />
        {/* {13 children} */}
        <Container>
          <p>Alguma coisa</p>
          <div>
            <h2>teste</h2>
            <p>Meu container</p>
          </div>
        </Container>
        <ExecuteFunction myFunction={showMessage}/>
        {/* {15 mensagem} */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
      </div>
    </>
  )
}

export default App
