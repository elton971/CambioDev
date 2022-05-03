import {useState} from "react"
import "../Styles/InputMount.css"

export const InputMount  = (props:any ) =>{
    return (
        <div className="InputMount__container">
        <p>Introduza o valor</p>
        <input
            id="input__value"
            type="text"
            placeholder="1"
            
            onChange={(e)=>{
                props.setInput(e.target.value);
            }}
        />
        </div>
    );
}