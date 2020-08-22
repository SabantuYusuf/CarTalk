import React from 'react';
import routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import './App.css';

class App extends React.Component {
  state = {
    currentUser: '',
  };

  setCurrentUser = (token) => {
    // Store Token
    // Set Auth Header
    //Decode Token
    // Set State
  };

  logout =() => {
    // Remove Token
    // Remove Auth Header
    // Set State
    // Redirect
  };

  render() {
    return(
      <React.Fragment>
        <NavBar />
        <div className="container">
          { routes }
        </div>
      </React.Fragment>
    );
  };
};

export default App;
