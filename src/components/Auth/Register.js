import React, { Component } from 'react';
import { WithRouter } from 'react-router-dom';
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
        axios.post(`${process.env.REACT_APP_API}/auth/register`, this.state)
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
                    <label htmlFor="firstname"> First Name</label>
                    <input onChange={this.handleChange} type="text" id="firstname" name="firstname" value={this.state.firstname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname"> Last Name</label>
                    <input onChange={this.handleChange} type="text" id="lastname" name="lastname" value={this.state.lastname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email"> Email</label>
                    <input onChange={this.handleChange} type="text" id="email" name="email" value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password</label>
                    <input onChange={this.handleChange} type="text" id="password" name="password" value={this.state.password}/>
                </div>
                <button className="registerbtn">Register</button>
            </form>
        )
    }
};

export default Register;