import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {


    render() {
        return (
            <div>
                <Link to="/">Home</Link> | 
                {/* conditionally show this link based on token?*/}
                <Link to="/todos">To Dos</Link> | 
                <Link to="/signup">Sign Up</Link> | 
                <Link to="/login">Login</Link> | 
                <Link to="/" onClick={this.props.logout}>Logout</Link>
            </div>
        )
    }
}
