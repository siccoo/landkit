import React from 'react';
import Topbar from "../../components/navbar/index";
import "./style.css";

import Mobile from "../../images/Phones.svg"

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
        </div>
    )
}

export default Home;