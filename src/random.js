import { useState } from "react";

function RandomNumber()
{
    var [number,setNumber] =useState(0);

    function generateRandomNumber(){
        var randomNumber = Math.floor(Math.random() * 100);
        setNumber(randomNumber)
    }

    return(
        <div className="card">
            <h1>Random Number: {number}</h1>
          <button  className="button" onClick= {generateRandomNumber}>Generate Random Number</button>
        </div>
    )
}
export default RandomNumber;