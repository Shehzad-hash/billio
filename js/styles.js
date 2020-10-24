var ctx = document.getElementById("myChart-4").getContext("2d");

var data = {
  labels: ["Small", "Mid", "Large"],
  datasets: [{
    label: "Blue",
    backgroundColor: "#F4C0B2",
    data: [0.1, 0.3, 3.7]
  }, {
    label: "Red",
    backgroundColor: "#D8BF2C",
    data: [0.4, 0.8, 3.0]
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
          fontSize: 16,
          fontColor: '#707070',
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

// Chart 2
var ctx = document.getElementById("myChart-5").getContext("2d");

var data = {
  labels: ["Value", "Blend", "Growth"],
  datasets: [{
    label: "Blue",
    backgroundColor: "#F4C0B2",
    data: [0.5, 0.7, 1.7]
  }, {
    label: "Red",
    backgroundColor: "#D8BF2C",
    data: [1.4, 0.8, 0.5]
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
          fontSize: 16,
          fontColor: '#707070',
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