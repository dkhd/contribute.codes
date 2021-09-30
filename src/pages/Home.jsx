import React from 'react';
import Header from '../components/home/Header';
import QueryBuilder from '../components/home/QueryBuilder';

function Home(props) {
    return (
        <div className="flex flex-col w-full container items-center mx-auto">
            <Header></Header>
            <QueryBuilder></QueryBuilder>
        </div>
    );
}

export default Home;