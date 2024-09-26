import React from 'react'

const LabelInput = (props) => {
    // const Label = {
    //     back-groundColor = "red";
    // }
  return (
    <div>
        <label htmlFor={props.id}>{props.lbl}</label>
        <input 
            type="text"
            name={props.id}
            id={props.id}
            value={props.value}
            // onChange={() => setValue(target.value)}
        />
        <span className="material-symbols-outlined">
          stat_minus_1
        </span>
    </div>
  )
}

export default LabelInput;