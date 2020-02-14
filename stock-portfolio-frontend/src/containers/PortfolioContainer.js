import React, { Component } from 'react';
import Portfolio from '../components/Portfolio';
import StocksForm from '../components/StocksForm';

class PortfolioContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {stocks: [], balance: 5000};
    }

    fetchStocks = async () => {
        const id = JSON.parse(localStorage.userData).id
        const URL = `http://localhost:3000/users/${id}/stocks`
        try {
            const fetchResponse = await fetch(URL)
            const data = await fetchResponse.json();
            // add returned stock to state array 
            // calculate price of all the stocks and add it to balance
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.fetchStocks()
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                    <h2 className="my-4">Portfolio (${this.state.balance})</h2>
                    {this.state.stocks.map((stock) => (
                        <Portfolio symbol={stock.symbol} shares={stock.shares} value={stock.value}/>
                    ))}
                    </div>
                    <div className="col"><StocksForm cash={5000}/></div>
                </div>
              
            </div>
        )
    }
}

export default PortfolioContainer