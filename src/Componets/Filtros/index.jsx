import React from "react";
import Style from "./style.module.css";
import LabelInput from "./LabelInput.jsx";
import { useState } from "react";

const index = () => {
  const { title, setTitle } = useState("Abroba");
  return (
    <>
      <div className={Style.container}>
        <div id={Style.titleFiltro}>
          <span>icone</span>
          <p>Filtros</p>
        </div>
        <div className={Style.selects}>
          <LabelInput
            id="title"
            lbl="Situação "
            value={title}
            setValue={setTitle}
          />
          <LabelInput
            id="title"
            lbl="Vendedor "
            value={title}
            setValue={setTitle}
          />
          <LabelInput
            id="title"
            lbl="Telefone/Celular "
            value={title}
            setValue={setTitle}
          />
        </div>
      </div>
    </>
  );
};
export default index;
