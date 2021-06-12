import React from "react";
import PersonLR from "./PersonLR.js";
function ListAsKey() {
  const persons = [
    {
      id: 1,
      name: "Sara",
      age: 23,
      skill: "Java",
    },
    {
      id: 2,
      name: "Michale",
      age: 33,
      skill: "Javascript",
    },
    {
      id: 3,
      name: "Sita",
      age: 24,
      skill: "Python",
    },
  ];
  const personList = persons.map((person) => (
    <PersonLR key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}
export default ListAsKey;
