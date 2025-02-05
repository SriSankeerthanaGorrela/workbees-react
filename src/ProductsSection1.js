import React from "react";
import "./ProductsSection.css";

const ProductsSection = () => {
  return (
    <div className="products-container">
      <div className="products-box">
        <h2 className="section-title">Our Own Products</h2>

        
        <div className=" product-row">
          <div className=" balancers-image"></div>
          <div className="product-info">
          <h3 className="product-title">
  Balancers <span className="product-tag">Maintenance</span>
</h3>

            
            <p className="home-main-description">
              <strong>Home and vehicle maintenance services platform</strong>
            </p>
            <p className="home-description">
              Access premium care for your car and home at your fingertips. With the Balancers app, enjoy seamless booking, subscription management, and high-quality 
              <a href="# " className="more-link"> more....</a>
            </p>
            <button className="product-button">Explore Balancers</button>
          </div>
        </div>

        
        <div className="product-row">
          <div className="product-info">
            <h3 className="product-title">
              Runer <span className="product-tag">Marketing</span>
            </h3>
            <p className="product-main-description">
              <strong>Digital and leads driving marketing engine platform </strong>
            </p>
            <p className="product-description">
              Runer has the potential to transform the way businesses approach marketing and lead generation. By leveraging technology and incentivizing executives,it enables
              <a href="# " className="more-link"> more....</a>
            </p>
            <button className="product-button">Explore Runer</button>
          </div>
          <div className="runer-image"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
