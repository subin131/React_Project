import React from "react";

function MemoComp({ name }) {
  console.log("Hi this is memo");
  return <div>Memo Component {name}</div>;
}

export default React.memo(MemoComp);
