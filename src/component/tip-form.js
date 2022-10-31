import React, {useState} from "react";
import './tipStyles.css';
import {FaDollarSign} from 'react-icons/fa';
import {BsPersonFill} from 'react-icons/bs';


const percentage = [5, 10, 15, 25, 50];


const TipCal = () => {

    const [ valid, setValid ] = useState(false);
    const [tip, setTip] = useState(0);
    const [ total, setTotal ] = useState(0);
    const [ amount, setAmount ] = useState(0);
   
   
    function btnFunction(id) {
        console.log(id + 'S')
        const x = document.getElementById(id+'S').value;
            setTip(x)
    }
  
    const changeCustomHandler = (e) =>   setTip(e.target.value) 
        
  
    const tipCalculator = (event) => {
        event.preventDefault()
        
        let bill = parseInt(document.getElementById("bill").value);
        let customTip = parseInt(tip);
        let numOfPeople = parseInt(document.getElementById("numOfPeople").value);

        console.log(bill, customTip, numOfPeople)

        // checks if a value is passed t the input
        if (isNaN(bill) || isNaN(numOfPeople)) {
            return (
                console.log("baller"),
                setAmount(0),
                setTotal(0)
            )
        } else if (numOfPeople <= 0) {
            setValid(true)
        }


        
        
        
        // let personbill = bill * (customTip / 100) / numOfPeople;
        // let totalbill = (bill + (bill * (customTip / 100))) / numOfPeople;

 
        

        
    }
    console.log(valid, isNaN(amount) )

    const resetForm = () => {
        setAmount(0);
        setTotal(0);
        setTip(0);
        setValid(false);
    }
   
    return ( 
        <form className="tip-container" onSubmit={tipCalculator}> 
            <div className="tip-form">   

                <label className="label_valid" htmlFor="Bill">Bill</label>
                <div className="input-cover">
                    <span><FaDollarSign/></span> 
                    <input 
                        className="tip-input" 
                        id="bill" 
                        type="number" 
                        placeholder="0"
                        
                    />
                </div>
                
                <label className="label_valid" htmlFor="tip">Select Tip %</label>
                <div className="btn_cover">
                {percentage.map((per, ind, arr) => {
                    return (
                        <button
                            className="btn_keys" 
                            id={ind + 'S'} 
                            type="button" 
                            value={per}
                            onClick={(id) => btnFunction(ind)}
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
                <div className="content-cover">

                    <label className="label_valid" htmlFor="number" >Number of People</label>
                    { valid && <label className="label_invalid" htmlFor="number">Can't be zero</label>}
                   
                    <div className=  {valid ? "input-cover invalid" : "input-cover"}>
                        <span><BsPersonFill/></span>
                        <input 
                            className="tip-input" 
                            id="numOfPeople" 
                            type="number" 
                            placeholder="0"
                           
                        />
                    </div>
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
                <button style={{"display": "none"}} type="submit" onClick={tipCalculator}></button>
            </div> 
        </form>
        
     );
}
 
export default TipCal;