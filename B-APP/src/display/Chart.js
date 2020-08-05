import React, {Component} from 'react';
import { Pie,Doughnut, Bubble } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props  ){
         super(props);
         this.state={
             chartData: {
                 labels: [
                     'Food','Shopping','Activities','Living','Travel','Etc'
                 ],
                 datasets:[
                     {labels: 'Amount Spent',  
                    data:[
                        500,
                        1000,
                        400,
                        2000,
                        3000,
                        600
                    ],
                    backgroundColor:['rgba(255, 99, 132, 0.6) ',
                    'rgba(255, 144, 97, 0.6) ',
                    'rgba(168, 211, 48, 0.6) ',
                    'rgba(38, 106, 242, 0.6) ',
                    'rgba(112, 38, 241, 0.6) ' ,
                    'rgba(217, 37, 240, 0.6) '   
                
                    
                
                ]
                    
                    }

                 ]

             }
         }

    }
     addData(chartData, labels, data){
        chartData.data.labels.push(labels);
        chartData.data.datasets.forEach((datasets) =>{
            datasets.data.push(data);

        })
    }
    removeData(chartData){
        chartData.data.labels.pop();
        chartData.data.datasets.forEach((datasets) =>{
            datasets.data.pop();
        })
        chartData.update();
    }
render(){
    return(
        <div classsName="Chart"> 
        <Pie
        data = {this.state.chartData}
        options= {
            {}
        }/>
        </div>


    )


}


}

export default Chart;
