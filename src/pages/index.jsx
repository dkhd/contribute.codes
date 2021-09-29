import React from 'react';
import Header from '../components/home/header';

function Home(props) {
    return (
        <div className="flex flex-col w-full container items-center mx-auto">
            <Header></Header>
        </div>
    );
}

export default Home;