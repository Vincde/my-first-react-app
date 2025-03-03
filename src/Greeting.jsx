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

  export {Greeting, MyFavoriteFood, ILovePizza, ILoveU};