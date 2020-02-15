import React, { Component } from 'react'

class Transaction extends Component {
    render() {
        return (
            <div>
                BUY ({this.props.transaction.symbol}) - {this.props.transaction.shares} Shares @ {this.props.transaction.value} On: {this.props.transaction.date}
            </div>
        )
    }
}

export default Transaction