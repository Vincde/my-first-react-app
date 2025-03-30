
import './App.css'
import { sculptureList } from './data';

function App() {

  let index = 0;

  function handleClick() {
    index +=1 ;
  }

  let sculpture = sculptureList[index];

  return(
    <>
      <button onClick={handleClick}>
        Next
      </button>
    </>
  )
}

export default App;