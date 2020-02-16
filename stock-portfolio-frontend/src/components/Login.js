import React, { Component } from 'react'

 class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
    }

    login = async () => {
        const URL = "http://localhost:3000/login"; 
        try {
            const fetchResponse = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({user: this.state}),
                headers:{
                  'Content-Type': 'application/json'
                }
            });
            const data = await fetchResponse.json();
            if(data.token) localStorage.setItem('userData', JSON.stringify(data));
            this.setState({email: '', password: ''})
            this.props.history.push('/portfolio');
        } catch(error) {
            console.log(error)
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnClick = (event) => {
        event.preventDefault()
        this.login();
    }
    
    render() {
        return (
            <div className="container p-3 border border-dark mt-5" id="login">
                <h3 className="text-center">Login</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"  name="email" onChange={this.handleOnChange} value={this.state.email}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleOnChange} value={this.state.password}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mb-3 login-button" onClick={this.handleOnClick}>Login</button>
                </form>
                <span>Don't have an account? <a href="/">Register</a> </span>
            </div>
        )
    }
}

export default Login