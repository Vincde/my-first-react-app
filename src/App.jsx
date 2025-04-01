
import { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [nTimes, setNTimes] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    if(backgroundColor !== color){
      setNTimes(nTimes + 1);
    }
    

    setBackgroundColor(color);
    
  };


  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <div>
        Number of Times : {nTimes}
      </div>
    </div>
  );
}

export default App;
