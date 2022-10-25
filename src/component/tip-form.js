import React from "react";
import './tipStyles.css';
import {FaDollarSign} from 'react-icons/fa';
import {BsPersonFill} from 'react-icons/bs';


const TipCal = () => {
    const percentage = [5, 10, 15, 25, 50];
    // const [query, SetQuery] = useState()
    // const x = document.getElementById("btnTip").innerHTML;
    // console.log(x)

    const tipCalculator = (event) => {
        event.preventDefault()
        let bill = parseInt(document.getElementById("bill").value);
        let customTip = parseInt(document.getElementById("customTip").value);
        let numOfPeople = parseInt(document.getElementById("numOfPeople").value);

        let total = (bill + (bill * (customTip / 100))) / numOfPeople;

        // document.getElementById('').innerHTML = `$${total.toFixed(2)}`;
        console.log(total)
    }
    function myFunction(id) {
        const x = document.getElementById(id+'S').value;
        x.map((per, id, arr) => {
            return(
                console.log(per.pop('%'))
                
            )
            
        })
        
        
    }
    const SubmitHandler = () => {
        console.log()
    }
    const changeHandler = (e) => {
        return (
            console.log(e.target.value)   
        )
    } 
    console.log()
    return ( 
        <form className="tip-container " onSubmit={SubmitHandler}> 
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
                            id={ind+'S'} type="button" 
                            value={per+'%'}
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
                   onChange={changeHandler}
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
                <p>$0.00</p>
              </div>
              <div className="tip-amount">
                <h3>Total<br /><span>/ person</span></h3>
                <p id="total">$0.00</p>
              </div>
                <button className="btn" type='reset'>RESET</button>
                <button onClick={tipCalculator}>RUN</button>
            </div> 
        </form>
        
     );
}
 
export default TipCal;