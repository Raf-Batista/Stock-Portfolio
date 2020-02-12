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
    render() {
        return (
            <div className="container  p-3" id="login">
                <h3 className="text-center">Register</h3>
                <form>
                     <div class="form-group">
                        <label HTMLfor="name">Name</label>
                        <input type="name" class="form-control"  name="name" onChange={this.handleOnChange} />
                    </div>

                    <div class="form-group">
                        <label HTMLfor="email">Email address</label>
                        <input type="email" class="form-control"  name="email" onChange={this.handleOnChange} />
                    </div>

                    <div class="form-group">
                        <label HTMLfor="password">Password</label>
                        <input type="password" class="form-control" name="password" onChange={this.handleOnChange}/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup
