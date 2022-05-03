
import "../styles/SelectCountry.css";
import Img from "../img/exchange.png";
import {Botao} from "./Botao";
import { useState,useEffect} from "react";
let country_list:any;


export const SelectCountry = (props:any) => {
    country_list = {
        "AED" : "AE",
        "AFN" : "AF",
        "XCD" : "AG",
        "ALL" : "AL",
        "AMD" : "AM",
        "ANG" : "AG",
        "AOA" : "AO",
        "AQD" : "AQ",
        "ARS" : "AR",
        "AUD" : "AU",
        "AZN" : "AZ",
        "BAM" : "BA",
        "BBD" : "BB",
        "BDT" : "BD",
        "XOF" : "BE",
        "BGN" : "BG",
        "BHD" : "BH",
        "BIF" : "BI",
        "BMD" : "BM",
        "BND" : "BN",
        "BOB" : "BO",
        "BRL" : "BR",
        "BSD" : "BS",
        "NOK" : "BV",
        "BWP" : "BW",
        "BYR" : "BY",
        "BZD" : "BZ",
        "CAD" : "CA",
        "CDF" : "CD",
        "XAF" : "CF",
        "CHF" : "CH",
        "CLP" : "CL",
        "CNY" : "CN",
        "COP" : "CO",
        "CRC" : "CR",
        "CUP" : "CU",
        "CVE" : "CV",
        "CYP" : "CY",
        "CZK" : "CZ",
        "DJF" : "DJ",
        "DKK" : "DK",
        "DOP" : "DO",
        "DZD" : "DZ",
        "ECS" : "EC",
        "EEK" : "EE",
        "EGP" : "EG",
        "ETB" : "ET",
        "EUR" : "FR",
        "FJD" : "FJ",
        "FKP" : "FK",
        "GBP" : "GB",
        "GEL" : "GE",
        "GGP" : "GG",
        "GHS" : "GH",
        "GIP" : "GI",
        "GMD" : "GM",
        "GNF" : "GN",
        "GTQ" : "GT",
        "GYD" : "GY",
        "HKD" : "HK",
        "HNL" : "HN",
        "HRK" : "HR",
        "HTG" : "HT",
        "HUF" : "HU",
        "IDR" : "ID",
        "ILS" : "IL",
        "INR" : "IN",
        "IQD" : "IQ",
        "IRR" : "IR",
        "ISK" : "IS",
        "JMD" : "JM",
        "JOD" : "JO",
        "JPY" : "JP",
        "KES" : "KE",
        "KGS" : "KG",
        "KHR" : "KH",
        "KMF" : "KM",
        "KPW" : "KP",
        "KRW" : "KR",
        "KWD" : "KW",
        "KYD" : "KY",
        "KZT" : "KZ",
        "LAK" : "LA",
        "LBP" : "LB",
        "LKR" : "LK",
        "LRD" : "LR",
        "LSL" : "LS",
        "LTL" : "LT",
        "LVL" : "LV",
        "LYD" : "LY",
        "MAD" : "MA",
        "MDL" : "MD",
        "MGA" : "MG",
        "MKD" : "MK",
        "MMK" : "MM",
        "MNT" : "MN",
        "MOP" : "MO",
        "MRO" : "MR",
        "MTL" : "MT",
        "MUR" : "MU",
        "MVR" : "MV",
        "MWK" : "MW",
        "MXN" : "MX",
        "MYR" : "MY",
        "MZN" : "MZ",
        "NAD" : "NA",
        "XPF" : "NC",
        "NGN" : "NG",
        "NIO" : "NI",
        "NPR" : "NP",
        "NZD" : "NZ",
        "OMR" : "OM",
        "PAB" : "PA",
        "PEN" : "PE",
        "PGK" : "PG",
        "PHP" : "PH",
        "PKR" : "PK",
        "PLN" : "PL",
        "PYG" : "PY",
        "QAR" : "QA",
        "RON" : "RO",
        "RSD" : "RS",
        "RUB" : "RU",
        "RWF" : "RW",
        "SAR" : "SA",
        "SBD" : "SB",
        "SCR" : "SC",
        "SDG" : "SD",
        "SEK" : "SE",
        "SGD" : "SG",
        "SKK" : "SK",
        "SLL" : "SL",
        "SOS" : "SO",
        "SRD" : "SR",
        "STD" : "ST",
        "SVC" : "SV",
        "SYP" : "SY",
        "SZL" : "SZ",
        "THB" : "TH",
        "TJS" : "TJ",
        "TMT" : "TM",
        "TND" : "TN",
        "TOP" : "TO",
        "TRY" : "TR",
        "TTD" : "TT",
        "TWD" : "TW",
        "TZS" : "TZ",
        "UAH" : "UA",
        "UGX" : "UG",
        "USD" : "US",
        "UYU" : "UY",
        "UZS" : "UZ",
        "VEF" : "VE",
        "VND" : "VN",
        "VUV" : "VU",
        "YER" : "YE",
        "ZAR" : "ZA",
        "ZMK" : "ZM",
        "ZWD" : "ZW"
    }   
    const [paisfrom, setpaisfrom] = useState("");
    const [paisTo, setpaisTo] = useState("");
    const [imgFlag1,setImagFlag1] = useState("https://flagcdn.com/48x36/ae.png");
    const [imgFlag2,setImagFlag2] = useState("https://flagcdn.com/48x36/ae.png");
    const [resultado, setResul]=useState("Resultado");
    
   

    const [valorCal, setCalculo]=useState();
    
    const optionsValue=(currency_code:any) => {
        let selected = currency_code == "USD" ? "selected" : "";
        return(
            
            <option key={currency_code}   className="option_value"   value={currency_code} > {currency_code}</option>
        )
    }
    
    useEffect(() => {
        if(paisfrom != "" && paisTo != ""){
            setResul(`${props.inputVal} ${ paisfrom} = ${valorCal} ${ paisTo}`);
        }
        
    },[ valorCal]);

     
    return(
        <section>
            <div className="coutry">
                <div className="select_div">
                    <p>From</p>
                    <div className="select_div_flex">
                        {/* a img da bandeiras */}
                        <img src={imgFlag1} className="flag"/>
                        <select name="" className="drop__list" id="from"  
                            onChange={(e)=>{
                            setImagFlag1(`https://flagcdn.com/48x36/${country_list[e.target.value].toLowerCase()}.png`);
                            setpaisfrom(e.target.value);
                            
                        }}>

                        {
                            Object.keys(country_list).map( (currency_code:any) => {
                               
                                return optionsValue(currency_code)
                            })
                        }
                        </select>
                    </div>
            
                </div>
                <img src={Img} className="foto"/>
                <div className="select_div">
                    <p>To</p>
                    <div className="select_div_flex">
                        <img src={imgFlag2}  className="flag"/>
                        <select name="" className="drop__list"  id="to" 
                            onChange={(e)=>{
                            setImagFlag2(`https://flagcdn.com/48x36/${country_list[e.target.value].toLowerCase()}.png`);
                            setpaisTo(e.target.value); 
                            
                        }}>

                        {
                            Object.keys(country_list).map( (currency_code:any) => {
                                
                                return optionsValue(currency_code)
                            })
                        }   
                        </select>
                    </div>
                </div>
            </div>
            
            <p className="resultado"> {resultado}</p>  
            <Botao setCalculo={setCalculo} inputVal={props.inputVal} paisfrom={paisfrom} paisTo={paisTo}/>
        </section>
    )
}
