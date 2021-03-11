import React from 'react';
import Topbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import "./style.css";

import Mobile from "../../images/Phones.svg";
import Staff from "../../images/CompImg.svg";
import RealTime from "../../images/Converse.svg"
import Play from "../../images/playBtn.svg";
import BgImg from "../../images/BgImg.svg"

const Home = () => {
    return (
        <div>
            <section>
                <Topbar />
            </section>

            <section className="hero1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                                <h3>Chat with <span>friends</span>. <br/>Watch funny content.</h3>
                                <p>Forward-thinking businesses use Timekit to imagine, <br/>design and manage the perfect scheduling flows to <br />imagine, design and manage.</p>
                                <div className="input-group">
                                    <input type="email" name="email" id="email" className="" placeholder="(123) 4567-8901" />
                                    <span className="input-group-btn">
                                        <button className="btn" type="submit">Text link</button>
                                    </span>
                                </div>
                        </div>
                        <div className="col-md-6">
                            <img src={Mobile} alt="alternative" className="hero1-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Staff} alt="alternative" className="hero2-img" />
                        </div>
                        <div className="col-md-6 align-self-center">
                                <h3>Keep in touch while traveling the world.</h3>
                                <p>Forward-thinking businesses use Timekit to imagine, <br/>design and manage the perfect scheduling flows to <br />imagine, design and manage.</p>
                                <div className="input-group">
                                    {/* <input type="email" name="email" id="email" className="" placeholder="(123) 4567-8901" /> */}
                                    <span className="input-group-btn px-3">
                                        <button className="btn" type="submit">View show list</button>
                                    </span>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                                <h3>Chat with your friends <br/>while watching together.</h3>
                                <p>Forward-thinking businesses use Timekit to imagine, <br/>design and manage the perfect scheduling flows to <br />imagine, design and manage.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={RealTime} alt="alternative" className="hero-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="image-wrapper">
                                    <div className="video-wrapper">
                                        <a className="popup-youtube" href={"https://www.youtube.com"} datatype="video" >     
                                            <img className="img-fluid hero4-img" src={BgImg} alt="alternative" />
                                            <span className="video-play-button">
                                                <img className="hero4play-img" src={Play} alt="alternative" /> WATCH VIDEO
                                            </span>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Home;