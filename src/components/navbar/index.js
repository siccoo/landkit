import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

import { FiChevronDown } from "react-icons/fi";
import Logo from "../../images/LandkitImg.svg";
import RubyHR from "../../images/IconHR.png";
import RubyAcademy from "../../images/IconAcad.png";

const Topbar = () => {

    return (
            <section className="nav-section">
                <div className="">
                    <nav className="navbar navbar-expand-lg navbar-light nav-bg justify-content-sm-start fixed-top" >
                    <Link to={'/'} className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto">
                        <img src={Logo} alt='Landkit' className="home-logo" />
                    </Link>
                    <button className="navbar-toggler align-self-start hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{marginTop: 5 + 'px'}}>
                        <span className="line"></span> 
                        <span className="line"></span> 
                        <span className="line"></span>
                    </button>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse">
                            <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/" data-toggle="dropdown">Platform</Link>  
                            </li><br />
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/" data-toggle="dropdown">About Us</Link>
                            </li><br />
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/" data-toggle="dropdown">Resources <FiChevronDown /></Link>
                                <div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item">eBooks</Link>
                                    <Link to="https://courses.salesruby.com/" className="dropdown-item">Ruby Courses</Link>
                                    <Link to="/" className="dropdown-item">Sales Evaluation Tool</Link>   
                                </div>
                            </li><br />
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li><br />
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-btn1" href="/">Log In</Link>
                                </li><br />
                                <li className="nav-item">
                                    <Link className="nav-btn" href="/">Request a demo</Link>
                                </li><br />
                            </ul>
                        </div>
                    </nav> 
                </div>
        </section>
    )
}

export default Topbar;