import React, { Component } from 'react';

class Like extends Component {
    state = {
        count: 0
    }

    increment = () => {
        console.log('like added')
        let newlike = this.state.count +1
        this.setState({
            count: newlike
        })
    }

    render() {
        return (
            <button onClick={this.increment} className="like">Like {this.state.count} </button>
        )
    }

};

export default Like;