import React from "react";
const Chart = () =>{
    return(
        <div style={{border:"solid 1px", height:"28rem", textAlign:"center", padding:"1rem"}}>
            <h3><b>Report Analysis</b></h3>
            <img className="img fluid" style={{height:"22rem",width:"24rem"}} src={require('./Capture.PNG')} alt = "Chart"></img>
            <h5><b>Product Count</b></h5>
        </div>
    )
} 

export default Chart;

