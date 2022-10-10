import React from "react";
import './tipStyles.css';

const TipCal = () => {
    const percentage = [5, 10, 15, 25, 50]
    return ( 
        <div className="tip-container ">
            <div className="tip-form">
                <form>
                    <label htmlFor="Bill">Bill</label> 
                    <input className="tip-input"  type="text"/>
                    <label htmlFor="tip">Select Tip %</label>
                    {percentage.map((per, id, arr) => {
                        return (
                        <button key={id}>{per}%</button>
                        )
                    })}
                        <input />
                    <label htmlFor="number" >Number of People</label>
                    <input className="tip-input" type="text" />
                
                </form>
            </div>
            <div className="tip-result">

            </div>
        </div>
     );
}
 
export default TipCal;