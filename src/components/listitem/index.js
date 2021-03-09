import React from "react";
import './listitem.css'

const ListItems = ({ title, desc }) => {
  return !title ? null : (
    <div className="listItemComponent">
      <h2 className="componentTitle">{title}</h2>
      <div className="componentDesc">{desc}</div>
    </div>
  );
};

export default ListItems;
