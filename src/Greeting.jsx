import { createElement } from "react";

function Greeting() {
  return createElement('h1', {className: 'greeting'}, 'hello', createElement('i', null), '.welcome!');
}

  function MyFavoriteFood() {
    return (
      <>
    <h1>My favorite foods are: <br /></h1>
    <div>Pizza</div>
    <div>Pasta</div>
    <div>Potatoes</div>
    </>
    )

  }

  function ILovePizza(){
    return <p>hewwo</p>
  }

  function ILoveU(){
    return <footer>aaaaaaaaaaa</footer>
  } 

  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color:'pink',
    }
  };

  export default function TodoList() {
    return(
      <div style={person.theme}>
        <h1>{person.name}s Todos</h1>
        <img 
        className = "avatar"
        src="" alt="" />

      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
      </div>
    );
  }

  export {Greeting, MyFavoriteFood, ILovePizza, ILoveU};