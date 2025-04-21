
import { useState } from "react";
import "./App.css";



function Person() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const fullName = firstName + ' ' + lastName;



  return (
    <>
      <CustomInput name={firstName} onChange={(e) => setfirstName(e.target.value)}  typeofName={"firstname"}></CustomInput>
      <CustomInput name={lastName} onChange={(e) => setlastName(e.target.value)} typeofName={"lastname"}></CustomInput>
      <h1>{fullName}</h1>
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