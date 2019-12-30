import React from 'react';
import Header from '../components/header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'John',
            lastName: 'Smith',
            loggedIn: false
        }
    }
    render() {
        return (
            <div className="main-container">
                <Header loggedIn={this.state.loggedIn}/>
                <h1>My List</h1>
                <p>Welcome back {this.state.firstName}</p>
            </div>
        );
    }
}

export default App;
