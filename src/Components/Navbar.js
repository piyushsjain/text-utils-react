import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between bg-purple-600 text-white py-2 px-3 sm:px-9">
      <Link to="/"><div className="font-bold text-lg cursor-pointer">TextUtils</div></Link>
      <div className="w-24 sm:w-28">
        <ul className="flex justify-between font-semibold">
          <Link to="/">
            <li className="cursor-pointer hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer hover:underline">About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
