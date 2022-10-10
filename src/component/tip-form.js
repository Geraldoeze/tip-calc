import React from "react";
import './tipStyles.css';

const TipCal = () => {
    const percentage = [5, 10, 15, 25, 50]
    return ( 
        <div className="tip-container ">
            <div className="tip-form">
                <form>
                    <label htmlFor="Bill">Bills</label> 
                    <input />
                    <label htmlFor="tip">Select Tip %</label>
                    <div>
                        {percentage.map((per, id, arr) => {
                            return (
                            <button id={id}>{per}%</button>
                            )
                        })}
                        <input />
                    <label htmlFor="number" >Number of People</label>
                    <input />
                    </div>
                </form>
            </div>
            <div className="tip-result">

            </div>
        </div>
     );
}
 
export default TipCal;