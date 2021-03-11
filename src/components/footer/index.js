import React from 'react';
// import { Link } from "react-router-dom";
import "./style.css";

import Logo from "../../images/LandkitImg.svg";
import InstagramIcon from "../../images/instagram.svg";
import FacebookIcon from "../../images/fabook.svg";
import TwitterIcon from "../../images/twiiter.svg";
import PinterestIcon from "../../images/Vector.svg";

const Footer = () => {
    return (
        <div>
            <section className="footer-section">
                <div className="container">
                    <div className="row columns-wrapper">
                        
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <hr />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <img src={Logo} alt='Landkit' className="footer-logo" />
                            <p>A better way to build.</p>
                            <div className="social_info">
                                <img src={InstagramIcon} alt='Landkit' className="social-logo" /> &nbsp;
                                <img src={FacebookIcon} alt='Landkit' className="social-logo" /> &nbsp;
                                <img src={TwitterIcon} alt='Landkit' className="social-logo" /> &nbsp;
                                <img src={PinterestIcon} alt='Landkit' className="social-logo" /> &nbsp;
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h6>Products</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Page Builder</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">UI Kit</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Styleguide</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Documentation</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Changelog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Services</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Documentation</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Changelog</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Page Builder</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">UI Kit</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Connect</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Page Builder</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">UI Kit</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Styleguide</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Documentation</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Changelog</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Documentation</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Changelog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Legal</h6>
                            <ul className="unorder-list">
                            <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Documentation</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Changelog</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Page Builder</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;