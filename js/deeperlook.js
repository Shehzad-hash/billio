var ctx = document.getElementById("chart-0").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["",	"",	"",	"",	"",	"",	"","","",""],
        datasets: [{
            label: '',
            data: [51,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811],
            fill: false,
            borderColor: '#FF714B',
            borderWidth: 2,
            // backgroundColor: '#2196f3'
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0
        },
				line: {
					tension: 0.000001
				}
      },
      legend: {
        display: false
      },
      scales: {
        yAxes:[{
          gridLines: {
            borderDash: [4, 5],
            color: "#CCCCCB",
        },
        ticks: {
          fontSize: 18,
          fontStyle: 'bold',
          fontColor: '#707070'
        }
        }],
        xAxes: [{
          gridLines: {
              color: 'rgba(0,0,0,0)',
          }
          }],
      }
    }
});