import React, { Component } from 'react';
import Home from './Home';
import GameDetails from './GameDetails';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/game/:gameId" component={GameDetails} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
