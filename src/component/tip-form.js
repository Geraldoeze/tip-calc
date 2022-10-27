import React, {useState} from "react";
import './tipStyles.css';
import {FaDollarSign} from 'react-icons/fa';
import {BsPersonFill} from 'react-icons/bs';


const TipCal = () => {
    const percentage = [5, 10, 15, 25, 50];
    const [tip, SetTip] = useState(0);
    const [ total, SetTotal ] = useState(0);
    const [ amount, SetAmount ] = useState(0);
    // const x = document.getElementById("btnTip").innerHTML;
    // console.log(x)

   
    function myFunction(id) {
        const x = document.getElementById(id+'S').value;
            console.log(x)
            SetTip(x)
        
    }
    const SubmitHandler = () => {
        console.log()
    }
    const changeCustomHandler = (e) => {
        return (
            SetTip(e.target.value),
            console.log(e.target.value)   
        )
    }
    const changeHandler = (e) => {
        return (
            console.log(e.target.value)   
        )
    } 
    const tipCalculator = (event) => {
        event.preventDefault()
        let bill = parseInt(document.getElementById("bill").value);
        let customTip = parseInt(tip);
        let numOfPeople = parseInt(document.getElementById("numOfPeople").value);

        let personbill = bill * (customTip / 100) / numOfPeople;
        let totalbill = (bill + (bill * (customTip / 100))) / numOfPeople;

        SetAmount(personbill);
        SetTotal(totalbill);
        

        // let TA = document.getElementById('tipAmount');
        // TA.innerHTML = '$'+amount.toFixed(2);
        // console.log(bill, customTip, numOfPeople, total)
    }

    const resetForm = () => {
        SetAmount(0);
        SetTotal(0);
        SetTip(0);
    }
    
    return ( 
        <form className="tip-container" onSubmit={tipCalculator}> 
            <div className="tip-form">   

                <label htmlFor="Bill">Bill</label>
                <div className="input-cover">
                    <span><FaDollarSign/></span> 
                    <input 
                        className="tip-input" 
                        id="bill" 
                        type="number" 
                        placeholder="0"
                        onChange={changeHandler}
                    />
                </div>
                
                <label htmlFor="tip">Select Tip %</label>
                <div className="btn_cover">
                {percentage.map((per, ind, arr) => {
                    return (
                        <button
                            className="btn_keys" 
                            id={ind+'S'} 
                            type="button" 
                            value={per}
                            onClick={(id) => myFunction(ind)}
                            key={ind} 
                        >{per+'%'}</button>
                    )
                })}
                <input 
                   className="tip-input__odd" 
                   id="customTip" 
                   type="number" 
                   placeholder="Custom"
                   onChange={changeCustomHandler}
                />
                </div>                
                <label htmlFor="number" >Number of People</label>
                <div className="input-cover">
                    <span><BsPersonFill/></span>
                    <input 
                        className="tip-input" 
                        id="numOfPeople" 
                        type="number" 
                        placeholder="0"
                        onChange={changeHandler}
                    />
                </div>
                    

            </div>
            <div className="tip-result">
              <div className="tip-amount">
                <h3>Tip Amount<br /><span>/ person</span></h3>
                <p id="tipAmount">${amount.toFixed(2)}</p>
              </div>
              <div className="tip-amount">
                <h3>Total<br /><span>/ person</span></h3>
                <p id="total">${total.toFixed(2)}</p>
              </div>
                <button className="btn" type='reset' onClick={resetForm}>RESET</button>
            </div> 
        </form>
        
     );
}
 
export default TipCal;