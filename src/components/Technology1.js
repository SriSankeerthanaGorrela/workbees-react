import React from 'react';
import './Technology1.css';

function Technology1() {
    return (
        <div className="container">
            <div className="content-box">
                <h3 className="service-expertise">Service and Expertise</h3>
                <h1 className="title">Technology that drives business growth</h1>
                <p className="description">
                    We provide development solutions to product companies and startups to
                    maximize engineering and design values across the full cycle and product development.
                </p>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <img src="/images/icon.png" alt="Icon" className="icon" />
                    <p className="text">
                        We are experts in areas like mobile and web development
                    </p>
                </div>
                <img src="./images/Tabs.png" alt="Linkme" className="image" />
            </div>
        </div>
    );
}

export default Technology1;