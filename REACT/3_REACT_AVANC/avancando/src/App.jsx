import './App.css';
// 2 - imagem em assets
import ImgNight from './assets/night.jpg';

// 3 - use states
import Data from './components/Data';

// 4 - list usestates
import ListRender from './components/ListRender';

function App() {

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
      </div>
    </>
  )
}

export default App
