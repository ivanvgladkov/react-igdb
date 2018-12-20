const initialState = {
    page: 1,
    query: "",
    games: []
};

function rootReducer(state = initialState, action) {
    if (action.type === "SET_GAMES") {
        return Object.assign({}, state, {
            games: action.payload
        });
    }

    if (action.type === "SET_QUERY") {
        return Object.assign({}, state, {
            query: action.payload
        });
    }

    if (action.type === "SET_PAGE") {
        return Object.assign({}, state, {
            page: action.payload
        });
    }

    return state;
}

export default rootReducer;