import React, { Component } from 'react';
import Portfolio from '../components/Portfolio';

class PortfolioContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {stocks : [{symbol: 'test', shares: 2, value: 234.24}, {symbol: 'test2', shares: 2, value: 234.24}], balance: 5000};
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
                    <div className="col">asdfasdf</div>
                </div>
              
            </div>
        )
    }
}

export default PortfolioContainer