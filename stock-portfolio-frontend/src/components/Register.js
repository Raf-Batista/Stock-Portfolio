import React, { Component } from 'react'

 class Signup extends Component {
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
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            user: this.state
        };
        try {
            const fetchResponse = await fetch(URL, settings);
            const data = await fetchResponse.json();
            console.log(data)
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
                    
                    <button type="submit" className="btn btn-primary" onClick={this.handleOnClick}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup
