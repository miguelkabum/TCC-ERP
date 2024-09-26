import styles from "./style.module.css";
import imgLogin from "../../assets/imgLogin.jpg";

const Cadastro = () => {
  return (
    <div id={styles.main}>
      <div id={styles.container}>
        <div id={styles.img}>
          <img src={imgLogin} alt="" />
        </div>

        <div id={styles.loginParts}>
          <h1>Cadastro</h1>

          <form action="">
            <div className={styles.input}>
              <label className={styles.textLabel} htmlFor="">
                Informe seu nome:
              </label>

              <input type="text" />
            </div>
            <div className={styles.input}>
              <label className={styles.textLabel} htmlFor="">
                Digite seu melhor e-mail:
              </label>

              <input type="text" />
            </div>

            <div className={styles.input}>
              <label className={styles.textLabel} htmlFor="">
                Crie uma nova senha:
              </label>

              <input type="Password" />
            </div>
            <div className={styles.input}>
              <label className={styles.textLabel} htmlFor="">
                Digite a senha novamente:
              </label>

              <input type="Password" />
            </div>
          </form>

          <button>Prosseguir</button>
        </div>
      </div>
    </div>
  );
};
export default Cadastro;
