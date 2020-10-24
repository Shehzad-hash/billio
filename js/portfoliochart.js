var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    segmentShowStroke: false,
    
    data: {
        datasets: [{
            data: [40, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            backgroundColor: [
                '#1F78B4',
                '#A6CEE3',
                '#A6CEE3',
                '#A6CEE3',
                '#A6CEE3',
                '#A6CEE3',
                '#A6CEE3',
                '#A6CEE3',
                '#A6CEE3',
                '#A6CEE3',
            ],
        }]
    },
    options: {
        elements: {
            customCutout: true
        },
        cutoutPercentage: 80
    }
});