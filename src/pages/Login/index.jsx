import styles from './style.module.css'
import imgLogin from '../../assets/imgs/imgLogin.jpg'

const Login = () => {
  return(
    <div id={styles.main}>
      <div id={styles.container}>

        <div id={styles.img}>
          <img src={imgLogin} alt="" />
        </div>

        <div id={styles.loginParts}>
          <h1>Login</h1>

          <form action="">

            <div className={styles.input}>

            <label 
            className={styles.textLabel} 
            htmlFor="">
              Usuário ou e-mail
            </label>

            <input type="text" />

            </div>

            <div className={styles.input}>

            <label 
            className={styles.textLabel} 
            htmlFor=""
            >
              Senha
            </label>

            <input type="Password" />

            </div>

          </form>

          <button>Entrar</button>

          <a href=''>Esqueceu sua senha?</a>
          <div className={styles.other}>
          <p>Ainda não tem um cadastro?</p>
          <a href="">Inscreva-se agora!</a>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Login;
