async function fetchStockData(symbol) {
    const apiKey = 'YOUR_API_KEY'; 
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }
  
  function processStockData(data) {
    const labels = [];
    const prices = [];
    for (const date in data["Time Series (Daily)"]) {
      labels.push(date);
      prices.push(parseFloat(data["Time Series (Daily)"][date]["4. close"]));
    }
    return { labels, prices };
  }
  
  async function updateChart() {
    const stockSymbol = "AAPL";
    const stockData = await fetchStockData(stockSymbol);
    const processedData = processStockData(stockData);
    myChart.data.labels = processedData.labels;
    myChart.data.datasets[0].data = processedData.prices;
    myChart.update();
  }
  updateChart();