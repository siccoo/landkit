import React from 'react';
import { Link } from "react-router-dom";
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
                        <div className="col-md-2"></div>
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
                            <h6>Product</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Features</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Enterprise</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Security</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Trust</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Customer Stories</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Pricing</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Integrations</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Oneburner Partners</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Company</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">About Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Contact Us</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Careers</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">In the News</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Oneburner for teams</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Engineering</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Financial Services</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">CRM and Sales</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">IT</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Marketing </a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Customer Support </a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Human Resources </a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Project Management </a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Remote Work </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h6>Resources</h6>
                            <ul className="unorder-list">
                                <li className="list-items">
                                    <a href="/" target="_blank" rel="noreferrer" className="footer-list">Community</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Guides</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Templates</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Video Tutorials</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Professional Services</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Knowledge Base</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Blog</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Webinars</a>
                                </li>
                                <li className="list-items">
                                    <a href="/" className="footer-list">Find a Partner</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>© 2020 Oneburner.com | All Rights Reserved. </p>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;