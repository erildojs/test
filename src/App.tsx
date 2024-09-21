import './App.module.css'
import Image from './assets/image.png'
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={Image} alt="BookWise Logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <h1>Boas vindas!</h1>
        <p>Faça seu login ou acesse como visitante.</p>
        <button className={styles.googleButton}>Entrar com Google</button>
        <button className={styles.githubButton}>Entrar com GitHub</button>
        <button className={styles.visitorButton}>Acessar como visitante</button>
      </div>
    </div>
  )
}

export default App
