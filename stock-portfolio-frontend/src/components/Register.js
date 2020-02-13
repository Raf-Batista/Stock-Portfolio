import React, { Component } from 'react'

 class Register extends Component {
     constructor(props) {
         super(props)
         this.state = {name: '', email: '', password: ''}
     }

     handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
      
      createUser = async () => {
        const URL = "http://localhost:3000/users"; 
        try {
            const fetchResponse = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({user: this.state}),
                headers:{
                  'Content-Type': 'application/json'
                }
            });
            const data = await fetchResponse.json();
            if(data.error) alert(data.error.join(', '))
        } catch(error) {
            console.log(error)
        }
      }

      handleOnClick = event => {
        event.preventDefault()
        this.createUser();
      }

    render() {
        return (
            <div className="container  p-3" id="login">
                <h3 className="text-center">Register</h3>
                <form>
                     <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="name" className="form-control"  name="name" onChange={this.handleOnChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"  name="email" onChange={this.handleOnChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleOnChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mb-3" onClick={this.handleOnClick}>Submit</button>
                </form>
                <span>Already have an account? <a href="#">Login</a> </span>
            </div>
        )
    }
}

export default Register
