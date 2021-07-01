import React, { Component } from 'react'
import { login } from './fetch-utils.js';

export default class Login extends Component {
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
        const token = await login(this.state.email, this.state.password);
        this.props.login(token);
        this.props.history.push('/todos');
    }

    render() {

        return (
            <div>
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
