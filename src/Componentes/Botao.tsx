  import "../Styles/botao.css";
  
  export const Botao=(props:any)=>{
      console.log(props.inputVal);
    const RequestFetch=()=>{
        let url = `https://v6.exchangerate-api.com/v6/80d1520c714f175609831cbd/latest/${props.paisesArray.Froms}`;
        fetch(url).then(response => response.json()).then(data => {
            let exchangeRate = data.conversion_rates[ props.paisesArray.tos]; // getting user selected TO currency rate
            let totalExRate = (props.inputVal* exchangeRate).toFixed(2); 
            props.setCalculo(totalExRate);
        });
      }
      return(
          
          <div className="Botao_container">
             
              <button onClick={RequestFetch}>Converter</button>
          </div>
      )
  }

 