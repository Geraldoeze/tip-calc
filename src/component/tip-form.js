import React from "react";
import './tipStyles.css';

const TipCal = () => {
    const percentage = [5, 10, 15, 25, 50];
    const SubmitHandler = (event) => {

    }
    return ( 
        <form className="tip-container "> 
            <div className="tip-form">
               
                    <label htmlFor="Bill">Bill</label> 
                    <input className="tip-input"  type="number" placeholder="0"/>
                    <label htmlFor="tip">Select Tip %</label>
                    <div className="btn_cover">
                    {percentage.map((per, id, arr) => {
                        return (
                            <button className="btn_keys" type="button" key={id}>{per}%</button>
                        )
                    })}
                    <input className="tip-input__odd" type="number" placeholder="Custom"/>
                    </div>
                        
                    <label htmlFor="number" >Number of People</label>
                    <input className="tip-input" type="number" placeholder="0"/>
                
               
            </div>
            <div className="tip-result">
              <div className="tip-amount">
                <h3>Tip Amount<br /><span>/ person</span></h3>
                <p>$0.00</p>
              </div>
              <div className="tip-amount">
                <h3>Total<br /><span>/ person</span></h3>
                <p>$0.00</p>
              </div>
                <button className="btn" type='reset' onClick={SubmitHandler}>RESET</button>
            </div> 
        </form>
        
     );
}
 
export default TipCal;