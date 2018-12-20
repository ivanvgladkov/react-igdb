import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadGames, setPage } from "../actions/index";

const mapStateToProps = state => {
    return {
        query: state.query,
        page: state.page
    };
};

function mapDispatchToProps(dispatch) {
    return {
        loadGames: (query, page) => loadGames(query, page)(dispatch),
        setPage: page => dispatch(setPage(page))
    };
}

class SearchBox extends Component {

    handlePrev(event) {
        event.preventDefault();

        if (this.props.page > 1) {
            this.props.setPage(this.props.page - 1);
            this.props.loadGames(this.props.query, this.props.page);
        }
    }

    handleNext(event) {
        event.preventDefault();

        this.props.setPage(this.props.page + 1);
        this.props.loadGames(this.props.query, this.props.page);
    }

    render() {
        return (
            <div>
                <a href="/" onClick={this.handlePrev.bind(this)}>Prev</a>
                &nbsp;&nbsp;&nbsp;
                <a href="/" onClick={this.handleNext.bind(this)}>Next</a>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
