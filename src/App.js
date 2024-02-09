import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  useEffect(() => {
    document.title = text;
    console.log(text)
  }, [text]);

  return(
    <div>
  
      <button onClick={() => setCount((count) => count + 1)}>
        I have been clicked {count} times
      </button>;
      <input 
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <DogPics/>
  </div>
  
  );
  
}

export default App;
