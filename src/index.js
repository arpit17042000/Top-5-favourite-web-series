import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


import Card from "./Card";
import Data from "./sdata";
ReactDOM.render(
  <>
    <h1 className="headingStyle">List of Top 5 Netflix Series</h1>
    {Data.map((val)=>{
      return (
        <Card
          srclink={val.srclink}
          hreflink={val.hreflink}
          title={val.title}
          sname={val.sname}
        />
      );
    })}
    
  </>,
  document.getElementById("root")
);
