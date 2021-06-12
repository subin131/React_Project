import React from "react";
function IndexKey() {
  const names = ["Ram", "hari", "sita"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default IndexKey;
