import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { games: state.games };
};

class GameDetails extends Component {

    render() {
        let game = null;
        this.props.games.forEach(g => {
            if (g.id == this.props.match.params.gameId) {
                game = g;
            }
        });

        return (
            <h1>
                {game ? game.name : ""}
            </h1>
        );
    }
}

export default connect(mapStateToProps)(GameDetails);
