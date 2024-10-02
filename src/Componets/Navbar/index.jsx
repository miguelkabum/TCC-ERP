import React from 'react'
import styles from './style.module.css'

const index = () => {
  return (
    <header>
        

        <ul className={styles.mainNav}>
          
          <li id={styles.logo}>
             <img src="../../../src//assets/icons/logoExample.png" alt="" />
          </li>
          <li className={styles.suprimentos}>Suprimentos</li>
          <li id={styles.vendas}>Vendas</li>
          <li id={styles.finanças}>Finanças</li>
          <li className={styles.servicos}>Serviços</li>
          <li id={styles.contabilidade}>Contabilidade</li>
        </ul>

        <ul className={styles.userActions}>

          <li id={styles.notifications}><img src="../../../src/assets/icons/notifications.svg"/></li>
          <li id={styles.profile}><img src="../../../src/assets/icons/user.svg"/></li>
          <div id={styles.division}></div>
          <li id={styles.settings}><img src="../../../src/assets/icons/settings.svg"/></li>
          <li id={styles.help}><img src="../../../src/assets/icons/help.svg"/></li>
          <li id={styles.logout}><img src="../../../src/assets/icons/logout.svg"/></li>
          
        </ul>
    </header>
  )
}

export default index