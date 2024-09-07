import React from "react";
import "./Navigation.css"
function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Your Feet Deserved The Best</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          deserunt provident quod repellendus dolorem at.
        </p>
        <div className="hero-btn">
        <button id="shop-now">Shop Now</button>
        <button id="category">Category</button>
        </div>
        <div className="shopping">
            <h4>Available On</h4>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="amazon-logo" />
            </div>
        </div>

      </div>

      <div className="hero-image">
      <img src="/images/shoe_image.png" alt="amazon-logo" />

      </div>
    </main>
  );
}

export default Hero;
