import React from 'react';
import ReactApexChart from 'react-apexcharts';
import S from './styles.module.scss'

export function DashPie() {
  const series = [24, 53, 41, 100, 65];
  const options = {
   labels:['camilla', 'victoria, matkja', 'adasdas', 'cscsdcdscsd', 'elo'],
    chart: {
      type: 'polarArea',
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
      <ReactApexChart options={options} series={series} type="polarArea"/>
    </div>
  );
}

