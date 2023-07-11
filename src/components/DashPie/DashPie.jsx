
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
    <div className={S.container}>
    <div id="chart" className={S.dashPie}>
      <ReactApexChart options={options} series={series} type="polarArea" />
    </div>
    </div>
  );
}
