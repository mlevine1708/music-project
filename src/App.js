import React, { useState } from "react";
import Header from "./components/Header";
import Lists from "./components/Lists";

import "./App.css";

const App = (props) => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "Rock",
      content: "Lorem.",
    },
    {
      id: 2,
      title: "Pop",
      content: "Ipsum.",
    },
    {
      id: 3,
      title: "Jazz",
      content: "Tothe.",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Lists lists={lists} />
    </div>
  );
};

export default App;
