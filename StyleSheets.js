import React from "react";
import "./myStyle.css";

function StyleSheets(props) {
  let className = props.primary ? "primary " : "";
  return (
    <div>
      {/* <h1 className="primary">Welcome to my app</h1>
      we can also pass it thriugh props */}
      <h2 className={className}>Welcome Dude in my app</h2>
    </div>
  );
}
export default StyleSheets;
