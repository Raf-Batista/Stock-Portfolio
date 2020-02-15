import React, { Component } from 'react'
import Transaction from '../components/Transaction'

class TransactionsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {transactions: []};
    }

    fetchTransactions = async () => {
        const id = JSON.parse(localStorage.userData).id
        const URL = `http://localhost:3000/users/${id}/transactions`
    
        try {
            const fetchResponse = await fetch(URL);
            const data = await fetchResponse.json();
            this.setState({transactions: data})
            console.log(this.state)
        } catch (error) {
            console.log(error)
        } 
    }

    componentDidMount() {
        this.fetchTransactions();
    }
    render() {
        return (
            <div className="container mt-5">
                <h2 className="mb-4">Transactions</h2>
                {this.state.transactions.map((transaction) => (
                    <Transaction transaction={transaction}/>
                ))}
            </div>
        )
    }
}


export default TransactionsContainer