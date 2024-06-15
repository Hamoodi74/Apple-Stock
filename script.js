const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Apple Stock Price',
      data: [],
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Fetch stock data from an API (replace with your preferred API)
fetch('https://api.example.com/stock/AAPL')
  .then(response => response.json())
  .then(data => {
    // Update chart data with fetched data
    myChart.data.labels = data.labels;
    myChart.data.datasets[0].data = data.prices;
    myChart.update();
  });