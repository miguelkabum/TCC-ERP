import React from "react";
import Style from "./style.module.css";
import LabelInput from "./LabelInput.jsx";
import { useState } from "react";

const index = () => {
  const {title, setTitle} = useState("Abroba")
  return (
    <>
      <div className={Style.container}>
        <LabelInput id="title" lbl="Nome de usuário: " value={title} setValue={setTitle}/>
      </div>
    </>
  );
};
export default index;
