import React from "react";
import Title from "./Title";
import { tour } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tour.map((value)=>{
          const {id,image,date,icon,country,title,text,time,price} = value;
          return  <article key={id} className="tour-card">
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                {country}
              </p>
              <p>{time} days</p>
              <p>from ${price}</p>
            </div>
          </div>
        </article>

        })}
       

        
      </div>
    </section>
  );
};

export default Tours;
