import {useState} from "react"
import "../Styles/InputMount.css"

export const InputMount  = (props:any ) =>{
    let enter=document.querySelector("#input__value");
    function handleChange(){
        props.setInput(enter.value);;
         
    }
    
    return (
        <div className="InputMount__container">
        <p>Introduza o valor</p>
        <input
            id="input__value"
            type="text"
            placeholder="1"
           
            onChange={handleChange}
        />
        </div>
    );
}