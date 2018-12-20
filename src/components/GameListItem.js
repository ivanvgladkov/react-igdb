import React, { Component } from 'react';
import { Link } from "react-router-dom";

class GameListItem extends Component {

    render() {
        const {game} = this.props;

        return (
            <div>
                <div><img style={{height: "100px", display: "inline-block"}} src={game.cover ? ("https:" + game.cover.url) : ''} alt="" /></div>
                <div><Link to={"/game/" + game.id}>{game.name}</Link></div>
            </div>
        );
    }
}

export default GameListItem;
