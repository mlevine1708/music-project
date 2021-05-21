import React, { useState } from "react";
import Header from "./components/Header";
import Lists from "./components/Lists";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import List from "./components/List";
import NotFound from "./components/NotFound";
import "./App.css";

const App = (props) => {
  const [lists, setLists] = useState([
    {
      id: 1,
      slug: "rock",
      title: "Rock",
      content: "Lorem.",
    },
    {
      id: 2,
      slug: "pop",
      title: "Pop",
      content: "Ipsum.",
    },
    {
      id: 3,
      slug: "jazz",
      title: "Jazz",
      content: "Tothe.",
    },
  ]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Lists lists={lists} />} />
          <Route
            path="/list/:listSlug"
            render={(props) => {
              const list = lists.find(
                (post) => list.slug === props.match.params.listSlug
              );
              if (list) return <List list={list} />;
              else return <NotFound />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
