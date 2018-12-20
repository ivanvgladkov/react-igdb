import React from 'react';
import SearchBox from './SearchBox';
import GameList from './GameList';
import Pagination from './Pagination';

export default function Home() {


    return (
        <div>
            <SearchBox />
            <GameList />
            <Pagination />
        </div>
    );
}
