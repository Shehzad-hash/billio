$(document).ready(function () {
    var newData =[0, 10, 20, 30, 40, 50];
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        segmentShowStroke: false,
        data: {
            labels: ['', '', '', ''],
            datasets: [{
                data: [20.58, 30.58, 40.58, 50.58],
                backgroundColor: [
                    '#CCCCCB',
                    '#ABABAA',
                    '#777776',
                    '#FF714B',
                ],
            }],
        },
        options: {       
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                            return  value +'%';
                        },
                         beginAtZero: true,
                         fontColor: '#707070',
                         fontStyle: 'bold',
                         fontSize: 20,
                        
                    },
                    gridLines: {
                        borderDash: [4, 5],
                        color: "#CCCCCB"
                    }
                }],
                xAxes: [{
                    barPercentage: 1.09,
                    gridLines: {
                        color: 'rgba(0,0,0,0)',
                    }
                    }],
            },
            legend:{
                display:false,
            },
            plugins: {
                datalabels: {
                    color: 'black',
                    align: 'end',
                    font: {
                        weight: 'bold',
                        size: 20,
                    },
                    anchor: 'end',
                    formatter: function (value, context) {
                        return '+ ' + value + '%'
                    }
                }
            }
        }
    });
        
});
