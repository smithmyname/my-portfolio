import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest">
                        Jason
                    </NavLink>
                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800"
                    activeClassName="text-red-100 bg-blue-600"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800"
                    activeClassName="text-red-100 bg-blue-600"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-gray-800"
                    activeClassName="text-red-100 bg-blue-600"
                    >
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/jasonpfranzke/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/jasonfranzke" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://www.facebook.com/jasonfranzke/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/smithmyname" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}