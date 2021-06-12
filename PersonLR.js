import React from "react";

function PersonLR({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} yeras old. I have a {person.skill}{" "}
        skills.
      </h2>
    </div>
  );
}
export default PersonLR;
