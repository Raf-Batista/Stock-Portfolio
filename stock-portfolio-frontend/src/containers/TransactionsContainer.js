import React, { Component } from 'react'

class TransactionsContainer extends Component {
    constructor(props) {
        super(props);
        this.setState({transactions: []});
    }

    fetchTransactions = async () => {
        const id = JSON.parse(localStorage.userData).id
        const URL = `http://localhost:3000/users/${id}/transactions`
    
        try {
            const fetchResponse = await fetch(URL);
            const data = await fetchResponse.json();
            this.setState({transactions: data})
            console.log(data)
        } catch (error) {
            console.log(error)
        } 
    }

    componentDidMount() {
        this.fetchTransactions();
    }
    render() {
        return (
            <div>
                TransactionsContainer
            </div>
        )
    }
}


export default TransactionsContainer