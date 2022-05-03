import { useState } from "react"
import { Botao } from "./Componentes/Botao"
import { InputMount } from "./Componentes/InputMount"
import { SelectCountry } from "./Componentes/SelectCountry"
import "./styles/app.css"	
function App() {
  
 const [ inputVal,setInput] = useState();

  
  return (
    <div className="app__container">
      <div className="app__Center">
        <span>Cambio de moedas</span>
        <InputMount  setInput={setInput} />
        <SelectCountry inputVal={inputVal}/>
      </div>
    </div>
  )
}

export default App