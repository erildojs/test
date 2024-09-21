import './App.module.css'
import Image from './assets/image.png'

function App() {

  return (
    <main>
      <div id='left'>
        <img src={Image} alt="imagem de fundo" />
      </div>
      <div id='right'>
        <h1 className='title'>Boas vindas!</h1>
        <h2 className='subtitle'>Faça seu login ou acesse como visitante.</h2>
      </div>
    </main>
  )
}

export default App
