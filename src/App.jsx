import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setgreeting] = useState("Greeting Message");
  const [, forceUpdate] = useState(0);
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={() => setgreeting("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => setgreeting("Hi!")}>Hi!</button>
        <button onClick={() => setgreeting("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
