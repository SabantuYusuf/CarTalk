import React from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import routes from './config/routes';
// import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import setAuthHeader from './utils/setAuthHeader';

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







// class App extends React.Component {
//   state = {
//     currentUser: localStorage.getItem('token'),
//   };

//   componentDidMount() {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // set Auth Header
//       setAuthHeader(token);
//       // Decone Toke
//       const decodeToken = jwt_decode(token);
//       // Set state
//       this.setState({currentUser: decodeToken.id})
//     }
//   }

//   setCurrentUser = (token) => {
//     // Store Token
//     localStorage.setItem('token', token);
//       // Set Auth Header
//       setAuthHeader(token);
//       //Decode Token
//       const decodeToken = jwt_decode(token);
//       // Set State
//       this.setState({currentUser: decodeToken.id})
//     }

//   logout =() => {
//     // Remove Token
//     // Remove Auth Header
//     // Set State
//     // Redirect
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <NavBar currentUser={this.state.currentUser} />
//         <div className="container">
//           <Routes currentUser={this.state.currentUser} set currentUser={this.setCurrentUser} />
//         </div>
//       </React.Fragment>
//     )
//   };
// };









export default App;
// export default withRouter(App);
