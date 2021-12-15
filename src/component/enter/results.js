import React,{useEffect, useState} from 'react';
// import NewForm from '../new form/newForm';
// import { useSelector } from 'react-redux';
import {getRusltByFormId} from '../api/surveyedApi'
//  import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import { Bar } from 'react-chartjs-2'
Chart.register(ArcElement);
function Results(props) {
 // const results = useSelector(state => state.results);
const [results,setResults]=useState([])
const [percentage, setpercentage] = useState(1);
// const [data1, setData1] = useState([])

  useEffect( () => {
    getRusltByFormId(props.formId)
      .then((data) => {
        setResults(data);
        console.log('results:',data);
       // dispatch(saveResults(data));
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }, []);
  // useEffect(() => {
  //   setpercentage(80);

  //   setData1({
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   })

  // }, [setpercentage, setData1]);

  // const labels = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  // ];
  // const data2 = {
  //   labels: labels,
  //   datasets: [{
  //     label: 'My First dataset',
  //     backgroundColor: 'rgb(255, 99, 132)',
  //     borderColor: 'rgb(255, 99, 132)',
  //     data: [0, 10, 5, 2, 20, 30, 45],
  //   }]
  // };
  // const config = {
  //   type: 'line',
  //   data: data2,
  //   options: {}
  // };

 // const labels = Utils.months({count: 7});
// const data3 = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };
 
// const config = {
//   type: 'line',
//   data: data3,
// };


//const [percentage, setpercentage] = useState(1);
  const [data, setData] = useState([])

  useEffect(() => {
    setpercentage(80);
    const labels =  [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
   
console.log(data);
  }, [setpercentage, setData]);






  return (<div >
        results
        {/* <Doughnut data={data3} width={"10px"} height={'10px'}
         options={{
         
          responsive: true,
          maintainAspectRatio: true,
        }}
/> */}
        {/* <Doughnut data={} /> */}
        <div>
  {/* <canvas id="myChart" data={data2}></canvas> */}
</div>
{/* <ErrorChart data={data} /> */}
  </div>)
}
export default Results;


export const ErrorChart = ({ data }) => {
  return (
    <div>
      <Bar data={data}>
      </Bar>
    </div>
  );

}
  // ErrorChart