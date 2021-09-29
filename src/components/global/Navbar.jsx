import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="w-full py-5">
            <div className="flex flex-row justify-center gap-4">
            <Link to="/" className="font-bold">Home</Link>
            <Link to="/about" className="font-bold">About</Link>
            </div>
        </div>
    );
}

export default Navbar;