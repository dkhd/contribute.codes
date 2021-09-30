import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 w-10/12 md:w-6/12">
      <span className="text-justify">
        <span className="font-semibold">Contribute Your Codes (CYC)</span> is an
        open source initiative to help you find the open source projects you can
        contribute to.{" "}
        <Link to="/about" className="border-b-2 border-dashed border-gray-600">
          Read more about CYC
        </Link>
        .
      </span>
    </div>
  );
}

export default Header;
