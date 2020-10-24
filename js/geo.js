var ctx = document.getElementById("myChart-3").getContext("2d");

var data = {
  labels: ["Domestic", "Developed Intl", "Emerging Markets"],
  datasets: [{
    label: "Blue",
    backgroundColor: "#FFFFFF",
    data: [3.7, 0.3, 0.1]
  }, {
    label: "Red",
    backgroundColor: "rgba(255, 255, 255, 0.31)",
    data: [3.0, 0.8, 0.4]
  }]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
  	legend: {
    	display: false,
    },
    barValueSpacing: 10,
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          min: 0,
        },
        gridLines: {
            display: false,
            color: 'rgba(0,0,0,0)',
        }
      }],
      xAxes: [{
      	ticks: {
          fontSize: 13,
          fontColor: '#FFFFFF',
          fontFamily: 'Archivo Black',
        },
      	gridLines: {
            display: false,
            color: 'rgba(0,0,0,0)',
        },
      }]
    }
  }
});