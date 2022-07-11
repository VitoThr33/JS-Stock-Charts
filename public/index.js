async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    
    //fetch request
    const response= await fetch ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX,EUR/USD,IXIC&interval=1min&apikey=a46bcdab13ee42bd9af1d80f4f2f3323')
    
    const result = await response.json()
    
    const { GME, MSFT, DIS, BNTX } = result;

    const stocks = [GME, MSFT, DIS, BNTX];

    
}

