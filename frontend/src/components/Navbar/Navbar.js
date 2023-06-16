import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import logo from '../../images/nitmlogo.jpg'
// import Home from '../Home/Home'
// import Event from '../Event/Registration'

export default function Navbar() {
    let location = useLocation();
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mx-0 my-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="https://www.nitmanipur.ac.in/">
                        <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top mx-2" />
                        NitMN
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto  me-0 mb-2 mb-lg-0 ">

                                <li className="nav-item">
                                    <Link className={`nav-link ${(location.pathname === "/" ? "active" : "")}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${(location.pathname === "/events" ? "active" : "")}`} aria-current="page" to="/Events">Events</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${(location.pathname === "/registration" ? "active" : "")}`} aria-current="page" to="/registration">Registration</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${(location.pathname === "/login" ? "active" : "")}`} aria-current="page" to="/login">Log in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${(location.pathname === "/admin" ? "active" : "")}`} aria-current="page" to="/admin">Admin</Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}