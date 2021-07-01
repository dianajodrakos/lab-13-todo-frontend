import React, { Component } from 'react'
import { signup } from './fetch-utils.js';

export default class Signup extends Component {
    //set state
    state = {
        email: '',
        password: '',
    }

    //onchange handler
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    //submit event handler
    handleSubmit = async e => {
        e.preventDefault();
        const token = await signup(this.state.email, this.state.password);
        this.props.login(token);
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                SIGN UP page
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                    </label>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}
