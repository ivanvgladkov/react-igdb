import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadGames, setQuery, setPage } from "../actions/index";

const mapStateToProps = state => {
    return {
        query: state.query,
        page: state.page
    };
};

function mapDispatchToProps(dispatch) {
    return {
        loadGames: (query, page) => loadGames(query, page)(dispatch),
        setQuery: query => dispatch(setQuery(query)),
        setPage: page => dispatch(setPage(page)),
    };
}

class SearchBox extends Component {

    handleChange(event) {
        event.preventDefault();
        this.props.setQuery(event.target.value);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.setPage(1);
        this.props.loadGames(this.props.query, this.props.page);
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange.bind(this)} type="text" value={this.props.query} />
                <button onClick={this.handleClick.bind(this)}>Search</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
