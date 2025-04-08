
import { useState } from "react";
import "./App.css";

function Person(){
  const [person, setPerson] = useState({name: "John", age: 100});

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);

    setPerson({...person, age: person.age + 1});
    
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  console.log("during render: ", person);

  return(
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  )
}


function CustomInput() {
  const [value, setValue] = useState("");

  return(
    <input 
    type="text"
    value={value}
    onChange={(event) => setValue(event.target.value)} />
  )
}
  

export {Person as App};