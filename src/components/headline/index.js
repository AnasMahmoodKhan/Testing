import React from "react";

const Headline = ({ header, desc }) =>
  !header ? null : (
    <div className="headlineComponent">
      <h1 className="header">{header}</h1>
      <p className="desc">{desc}</p>
    </div>
  );

export default Headline;
