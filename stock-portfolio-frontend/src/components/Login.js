import React, { Component } from 'react'

 class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {name: '', email: '', password: ''}
    }
    
    render() {
        return (
            <div className="container  p-3 border border-dark mt-5" id="login">
                <h3 className="text-center">Login</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"  name="email" onChange={this.handleOnChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleOnChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mb-3" onClick={this.handleOnClick}>Login</button>
                </form>
                <span>Don't have an account? <a href="/">Register</a> </span>
            </div>
        )
    }
}

export default Login