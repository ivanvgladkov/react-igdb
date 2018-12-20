import React, { Component } from 'react';
import { connect } from "react-redux";
import GameListItem from './GameListItem';

const mapStateToProps = state => {
    return { games: state.games };
};

class GameList extends Component {

    render() {
        const games = this.props.games;

        return (
            <div style={{display: "flex", width: "50%", "flexWrap": "wrap"}}>
                { games.map(game => <div key={game.id} style={{width: "200px", border: "1px solid #ccc", margin: "0 10px 10px 0"}}><GameListItem game={game} /></div> )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(GameList);
