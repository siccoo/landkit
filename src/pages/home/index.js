import React from 'react';
import Topbar from "../../components/navbar/index";

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