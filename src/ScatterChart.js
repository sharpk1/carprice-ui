import React from "react";
import Chart from "react-apexcharts";

const ScatterChart = () => {
  var options = {
    series: [{
    name: 'series1',
    data: [36000, 40000, 28000, 51000, 42000, 10900, 10000]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };
    return (
      <div>
<Chart
        options={options}
        series={options.series}
        // type="scatter"
        width="700"
      />
      </div>
        
    );
}

export default ScatterChart;