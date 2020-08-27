import React from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
// import routes from './config/routes';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import setAuthHeader from './utils/setAuthHeader';

import './App.css';


class App extends React.Component {
  state = {
    currentUser: localStorage.getItem('token'),
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      // set Auth Header
      setAuthHeader(token);
      // Decone Toke
      const decodedToken = jwt_decode(token);
      // Set state
      this.setState({currentUser: decodedToken.id})
    }
  }

  setCurrentUser = (token) => {
    // Store Token
    localStorage.setItem('token', token);
      // Set Auth Header
      setAuthHeader(token);
      //Decode Token
      const decodedToken = jwt_decode(token);
      // Set State
      this.setState({currentUser: decodedToken.id})
    }

  logout =() => {
    // Remove Token
    localStorage.removeItem('token');
    // Remove Auth Header
    setAuthHeader();
    // Set State
    this.setState({currentUser: ''});
    // Redirect
    this.props.history.push('/login');
  };

  render() {
    return (
      <React.Fragment>
        
        <NavBar currentUser={this.state.currentUser} logout={this.logout} />
        <Landing />
        <div className="container">
          <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        </div>
        <Footer />
        
      </React.Fragment>
    )
  };
};


export default withRouter(App);
