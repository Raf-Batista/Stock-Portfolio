import React, { Component } from 'react'

class Portfolio extends Component {
    render() {
        return (
            <div className="my-3">
                <span className="border-bottom p-2">
                    {this.props.symbol} - {this.props.shares} Shares ${this.props.value}
                </span>
            </div>
        )
    }
}

export default Portfolio