import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="flex flex-col items-center justify-center">
            <span className="text-justify w-10/12 md:w-6/12 mt-20"><Link to="/" className="border-b-2 border-dashed border-gray-600">Contribute Your Codes (CYC)</Link> is a Github repository explorer to help you find public repositories you can contribute. This website is still under development. In the meantime, you could read more <Link to="/about" className="border-b-2 border-dashed border-gray-600">about CYC</Link>.</span>
        </div>
    );
}

export default Header;