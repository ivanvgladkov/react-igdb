import axios from "axios";

export function loadGames(query, page) {
    return function action(dispatch) {
        let params = {
            offset: (page - 1) * 10,
            fields: "id,name,cover.url"
        };

        if (query.length > 0) {
            params["filter[name][prefix]"] = query;
            // params.search = query;
        }

        axios.get("https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/", {
            params: params,
            headers: {
                "user-key": "40759257c55df398b0d23ca3f4da5579",
                Accept: "application/json"
            }
        }).then(res => {
            const games = res.data;
            console.log(games);
            dispatch(setGames(games));
        });
    };
}


export function setGames(games) {
    return {
        type: "SET_GAMES",
        payload: games
    };
}

export function setQuery(query) {
    return {
        type: "SET_QUERY",
        payload: query
    };
}

export function setPage(page) {
    return {
        type: "SET_PAGE",
        payload: page
    };
}