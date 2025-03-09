import List from './Greeting';
import './App.css'

function App() {
  const animals = [];

  return(
    <div>
      <h1>Animals: </h1>
      <List animals = {animals} />
    </div>
  );
}

export default App
