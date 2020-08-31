import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './auth.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, this.state)
            .then((res) => {
                console.log(res);
            
                this.props.setCurrentUser(res.data.token);
                // this.props.history.push('/cars');
            })
            .catch((err) => {
                console.log(err);
                // console.log(err.response.data);
                // console.log(err.response.data.message);
            });
    };

    render () {
        console.log(this.props);
        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="email" id="email" name="email" value={this.state.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password}/>
                </div>
                <button className="loginbtn" type="submit">Login</button>
            </form>
        )
    }
};

export default withRouter(Login);