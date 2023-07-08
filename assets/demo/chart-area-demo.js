// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jun 28", "Jun 29", "Jun 30", "Jul 1", "Jul 2", "Jul 3", "Jul 4", "Jul 5", "Jul 6", "Jul 7", "Jul 8", "Jul 9", "Jul 10"],
    datasets: [
      {
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [100, 62, 63, 189, 87, 82, 34, 39, 89, 159, 41, 194, 251],
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          time: {
            unit: "date",
          },
          gridLines: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 12,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 500,
            maxTicksLimit: 5,
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});
