import React from 'react';
import '../Style/style.scss';

import Navbar from '../Layout/Navbar';
import Shaping from '../Layout/Shaping';
import Banner from '../Components/Banner';
import Footer from "../Layout/Footer";
import Cards from '../Components/Cards';

function About() {
    return (
        <div role="main">
            <Shaping>
                <Navbar />
                <Banner>
                    <div className="banner banner-commun">
                        <h1>About, partout et ailleurs</h1>
                    </div>
                </Banner>
            </Shaping>
            <Footer />
        </div>
    )
}

export default About

