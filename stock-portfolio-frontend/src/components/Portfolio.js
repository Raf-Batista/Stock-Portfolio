import React, { Component } from 'react'

class Portfolio extends Component {
    render() {
        return (
            <div className="my-3">
                <div>
                    {this.props.symbol} - {this.props.shares} Shares ${this.props.value}
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Portfolio