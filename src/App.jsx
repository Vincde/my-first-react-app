
import { useState } from "react";
import "./App.css";



function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const fullName = firstName + ' ' + lastName;

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <CustomInput name={firstName} onChange={(e) => setfirstName(e.target.value)}  typeofName={"firstname"}></CustomInput>
      <CustomInput name={lastName} onChange={(e) => setlastName(e.target.value)} typeofName={"lastname"}></CustomInput>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function CustomInput({name, onChange, typeofName}) {
  const aa = typeofName === 'firstname' ? 'First name:' : 'Last Name:';

  return (
    <>
    <h1>{aa}</h1>
    <input
      type="text"
      value={name}
      onChange={onChange}
    />
    </>
  );
}


export {Person as App};