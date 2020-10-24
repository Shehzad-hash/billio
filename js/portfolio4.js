google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['', ''],
        ['9.8%', 9.8],
        ['', 90.2],
    ]);

    var options = {
        pieStartAngle: 320,
        legend: 'none',
        pieSliceText: 'label',
        slices: {
            0: {
                offset: 0.3,
                color: '#FF714B',
            },
            1: {
                color: '#D8BF2C'
            },
        },
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

// Tabs
$('.port-folio-mini-card').click(function (e) { 
    $('.portfolio-tab').css('display', 'none');
    var sectionClass = $(this).attr('sec');
    $(sectionClass).fadeIn(1000);
    $('.port-folio-mini-card').removeClass('active');
    $(this).addClass('active');
});

//   Chart 2
var ctx = document.getElementById("myChart-2").getContext("2d");

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


//   Chart 3
var ctx = document.getElementById("myChart-3").getContext("2d");

var data = {
  labels: ["", "", ""],
  datasets: [{
    label: "Blue",
    backgroundColor: "#E83333",
    data: [3.7, 0.3, 0.1]
  }, {
    label: "Red",
    backgroundColor: "#D8BF2C",
    data: [3.0, 0.8, 0.4]
  }]
};

var myBarChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: data,
  options: {
  	legend: {
    	display: false,
    },
    barValueSpacing: 10,
    scales: {
      yAxes: [{
        barPercentage: 1,
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
          display: false,
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

// Owl
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav: false,
  dots: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1.5,
          nav:false,
          loop: true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:5,
          nav:false,
          loop:false
      }
  }
});