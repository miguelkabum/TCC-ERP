import React from 'react'
import Filtros from "../../components/Filtros/index.jsx"
import Style from "./style.module.css"
const Clientes = () => {
  return (
    <div className={Style.container}>
      <Filtros />
      <header>
        <h1>Cliente</h1>
        <button className={Style.addClient}>+ Incluir Cliente</button>
      </header>
    </div>
  )
}

export default Clientes