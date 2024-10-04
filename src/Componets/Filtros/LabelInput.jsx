import React from "react";
import styles from "./style.module.css";

const LabelInput = (props) => {
  // const Label = {
  //     back-groundColor = "red";
  // }
  return (
    <div id={styles.container}>
      <label htmlFor={props.id}>{props.lbl}</label>
      <div id="caixa">
        <select
          className={styles.select}
          type="select"
          name={props.id}
          id={props.id}
          value={props.value}
          // onChange={() => setValue(target.value)}
        >
          <option value="">Seleione uma opção</option>
        </select>
      </div>
    </div>
  );
};

export default LabelInput;
