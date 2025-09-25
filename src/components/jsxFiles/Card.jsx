import React, { useState } from "react";
import "../cssFiles/Card.css";

export default function Card({ imgSrc, alt, title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgSrc} alt={alt} />
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="shine"></div>
    </div>
  );
}
