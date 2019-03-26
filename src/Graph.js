import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
	render() {

		const options = {
			animationEnabled: true,
			exportEnabled: false,
			// title:{
			// 	text: "Top Categories of New Year's Resolution"
            // },
            width:300,
            height:300,
			data: [{
				type: "pie",
				toolTipContent: "{label}: <strong>{y}</strong>",
				indexLabel: "{y}",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 11, label: "Open Activity",color:"blue" },
					{ y: 15, label: "Open Sessions",color:"green" },
					{ y: 8, label: "Past Activities" },
					{ y: 10, label: "Product pushed to BOS" },
                    { y: 10, label: "Products with no selling price" },
                    { y: 19, label: "Products without stocks" },
                    { y: 12, label: "Previous season products" },
                    { y: 3, label: "Products with error" },
                    { y: 5, label: "Total products sent to RMS" },
                    { y: 9, label: "Total Activities Failed", color:"red" },
                    
                                        
				]
            }],
		}
		
		return (
		<div>
			{/* <h1>React Pie Chart</h1> */}
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChart;