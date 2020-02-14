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

    handleOnClick = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-4 ml-5">Cash - $ {this.props.cash}</h2>
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