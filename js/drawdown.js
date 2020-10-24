var ctx = document.getElementById("drawdown-chart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["",	"",	"",	"",	"",	"",	"","","",""],
        datasets: [{
            label: '',
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811],
            fill: 'end',
            borderColor: '#707070',
            borderWidth: 2,
            backgroundColor: '#88BEA7'
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
        yAxes: [{
          ticks: {
            reverse: true,
            fontSize: 18,
            fontColor: '#707070',
            fontStyle: 'bold'
          }
        }],
      }
    }
});