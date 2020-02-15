import React, { Component } from 'react'

class StocksForm extends Component {
    constructor(props) {
        super(props)
        this.state = {ticker: '', qty: 0}
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    fetchStocks = async () => {
        const URL = `https://sandbox.iexapis.com/stable/stock/${this.state.ticker}/quote?token=${process.env.REACT_APP_API_KEY}`
        try {
            const fetchRequest = await fetch(URL)
            const stockData = await fetchRequest.json();
            if(stockData.symbol)  this.buyStocks(stockData);
        } catch (error) {
            console.log(error)
        }
    }

    buyStocks = async (stockData) => {
        const URL = `http://localhost:3000/users/${JSON.parse(localStorage.userData).id}/stocks`
        try {
            const fetchRequest = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({stock: stockData, qty: this.state.qty}),
                headers:{
                  'Content-Type': 'application/json'
                }
            })

            this.setState({ticker: '', qty: 0});
            this.props.fetchUserStocks(); // Passed from parent, fetch the user's stock and update state to reflect newly bought stock

        } catch (error) {
            console.log(error)
        }
    }

    handleOnClick = (event) => {
        event.preventDefault();
        this.fetchStocks();
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-4 ml-5">Cash - $ {this.props.balance}</h2>
                <div class="form-group my-4 ml-5 w-50">
                    <input name="ticker" type="text" class="form-control" placeholder="Ticker" value={this.state.ticker} onChange={this.handleOnChange}/>
                </div>
                <div class="form-group ml-5 w-50">
                    <input name="qty" type="text" class="form-control" placeholder="Qty" value={this.state.qty} onChange={this.handleOnChange}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.handleOnClick}>Buy</button>  
            </div>
        )
    }
}

export default StocksForm