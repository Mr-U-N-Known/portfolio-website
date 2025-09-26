import React, { useState } from "react";
import "../cssFiles/Card.css";

import SEO from "./SEO";

export default function Card({ imgSrc, alt, title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <SEO title="Card Page" description="This is card page." />
      <img src={imgSrc} alt={alt} />
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="shine"></div>
    </div>
  );
}
