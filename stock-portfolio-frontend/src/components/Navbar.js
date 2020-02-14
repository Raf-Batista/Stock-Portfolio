import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

 class Navbar extends Component {

     handleOnClick = () => {
         localStorage.clear(); 
         this.props.history.push('/');
     }

    render() {
        const nav = 
        <div className="container">
            <div className="float-right">
                <NavLink className="mx-2" exact to='/portfolio'>Portfolio</NavLink>
                <NavLink className="mx-2" exact to='/transactions'>Transactions</NavLink>
                <a href='#' onClick={this.handleOnClick}>Logout</a>
            </div>      
        </div>
        return (
            <div>
                {this.props.localStorage.userData ? nav : null }
            </div>
        )
    }
}

export default withRouter(Navbar) 


