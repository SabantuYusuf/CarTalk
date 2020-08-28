import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    state= {
        username: '',
        firstName: '',
        lastName: '',
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
        axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, this.state)
            .then((res) => {
                console.log(res);
                this.props.history.push('/login')
            })
            .catch((err) => {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(err.response.data.message);
            });
    }

    render() {
        console.log(this.props);
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username"> Username</label>
                    <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username}/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName"> First Name</label>
                    <input onChange={this.handleChange} type="text" id="firstName" name="firstName" value={this.state.firstName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName"> Last Name</label>
                    <input onChange={this.handleChange} type="text" id="lastName" name="lastName" value={this.state.lastName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email"> Email</label>
                    <input onChange={this.handleChange} type="text" id="email" name="email" value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password</label>
                    <input onChange={this.handleChange} type="text" id="password" name="password" value={this.state.password}/>
                </div>
                <button className="registerbtn" type="submit">Register</button>
            </form>
        )
    }
};

export default withRouter(Register);