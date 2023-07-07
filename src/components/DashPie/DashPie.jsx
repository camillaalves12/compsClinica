// import React from 'react';
// import ReactApexChart from 'react-apexcharts';
// import S from './styles.module.scss'

// export function DashPie() {
//   const series = [24.05, 73, 41, 50, 95];
//   const options = {
//     labels:[`Dra. Camilla - R$ ${series[0]}`, `Dra. Miriam - R$ ${series[1]}`,`Dra. Vera - R$${series[2]}`, `Dr. Cicero - R$${series[3]}`, `Dr. Eloiza - R$${series[4]}`],
//     chart: {
//       type: 'polarArea',
//     },
//     tooltip: {
//       enabled: false
//     },
//     stroke: {
//       colors: ['#fff']
//     },
//     fill: {
//       opacity: 0.8
//     },
//     responsive: [{
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: '200px'
//         },
//         legend: {
//           position: 'bottom'
//         }
//       }
//     }]
//   };


//   return (
//     <div id="chart" className={S.dashPie}>
//       <ReactApexChart options={options} series={series} type="polarArea"/>
//     </div>
//   );
// }

// import React from 'react';
// import ReactApexChart from 'react-apexcharts';
// import S from './styles.module.scss';

// export function DashPie() {
//   const series = [2415, 1200, 7081, 350, 195];
//   const labels = ['Dra. Camilla', 'Dra. Miriam', 'Dra. Vera', 'Dr. Cicero', 'Dr. Eloiza'];
//   const options = {
//     labels: labels,
//     chart: {
//       type: 'polarArea',
//     },
//     tooltip: {
//       y: {
//         formatter: function (value, { seriesIndex, dataPointIndex, w }) {
//           return `R$ ${series[dataPointIndex]}`;
//         }
//       }
//     },
//     stroke: {
//       colors: ['#fff']
//     },
//     fill: {
//       opacity: 0.8
//     },
//     responsive: [{
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: '200px'
//         },
//         legend: {
//           position: 'bottom'
//         }
//       }
//     }]
//   };

//   return (
//     <div id="chart" className={S.dashPie}>
//       <ReactApexChart options={options} series={series} type="polarArea" />
//     </div>
//   );
// }

import React from 'react';
import ReactApexChart from 'react-apexcharts';
import S from './styles.module.scss';

export function DashPie() {
  
  const series = [24.05, 73, 41, 50, 95];
  const labels = series.map((value, index) => `Dra. ${index + 1} - <b>R$ ${value}</b>`);
  
  const options = {
    labels: labels,
    chart: {
      type: 'polarArea',
    },
    tooltip: {
      y: {
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
          return '';
        }
      }
    },
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '200px'
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div id="chart" className={S.dashPie}>
      <ReactApexChart options={options} series={series} type="polarArea" />
    </div>
  );
}
