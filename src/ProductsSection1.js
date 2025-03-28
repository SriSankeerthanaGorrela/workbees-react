import React from "react";
import balancersImg from "./Assets/images/balancers-image.svg";
import runerImg from "./Assets/images/runer-image.svg";
import "./ProductsSection.css";

const ProductsSection = () => {
  return (
    <div className="products-container">
      <div className="products-box">
        <h2 className="section-title">Our Own Products</h2>

        
        <div className="products-grid">
          
          <div className="product-column">
            <img src={balancersImg} alt="Balancers" className="product-image balancers-image" />
            
            <div className="runer-content">
              <h3 className="product-title">
                Runer <span className="product-tag">Marketing</span>
              </h3>
              <p className="product-main-description">
                <strong>Digital and leads driving marketing engine platform</strong>
              </p>
              <p className="product-description">
                Runer has the potential to transform the way businesses approach marketing and lead generation. By leveraging technology and incentivizing executives, it enables
                <a href="# " className="more-link"> more....</a>
              </p>
              <button className="product-button">Explore Runer</button>
            </div>
          </div>

          
          <div className="product-column1">
            <div className="balancers-content">
              <h3 className="product-title">
                Balancers <span className="product-tag">Maintenance</span>
              </h3>
              <p className="product-main-description">
                <strong>Home and vehicle maintenance services platform</strong>
              </p>
              <p className="product-description">
                Access premium care for your car and home at your fingertips. With the Balancers app, enjoy seamless booking, subscription management, and high-quality 
                <a href="# " className="more-link"> more....</a>
              </p>
              <button className="product-button">Explore Balancers</button>
            </div>

            <img src={runerImg} alt="Runer" className="product-image runer-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;