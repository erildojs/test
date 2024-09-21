import './App.module.css'
import Image from './assets/image.png'
import styles from './App.module.css';
import Google from './assets/google.png'
import Github from './assets/github.png'
import Guest from './assets/guest.png'
function App() {

  return (
    <div className={styles.container}>
      <img src={Image} alt="BookWise Logo" className={styles.logo} />
      <div className={styles.right}>
        <h1>Boas vindas!</h1>
        <p>Faça seu login ou acesse como visitante.</p>
        <button className={styles.googleButton}
        >
          <img src={Google} className={styles.imagep} alt="" />
          Entrar com Google</button>
        <button className={styles.githubButton}>
          <img className={styles.imagep} src={Github} alt="" />
          Entrar com GitHub</button>
        <button className={styles.visitorButton}>
          <img className={styles.imagep} src={Guest} alt="" />
          Acessar como visitante</button>
      </div>
    </div>
  )
}

export default App
