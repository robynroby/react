import React from "react";
import "./App.css";
import Tweet from "./tweet";


function App() {
  return(
    <div className="app">
      <Tweet name="robie" message="I am a very hardworking dude" />
      <Tweet name="ritchie" message="i love eating" />
      <Tweet name="walter white" message="i can walk 200 miles" />
      <Tweet name="jason stephens" message="i want to start a business" />
    </div>
  );
}

export default App;

