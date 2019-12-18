import React, { Component } from "react";
import CreateForm from "./components/CreateForm/CreateForm";
import AllAnimal from "./components/AllAnimal/AllAnimal";
class App extends Component {
  render() {
    return (
      <div
        style={{ height: "100vh" }}
        className="App bg-dark position-relative"
      >
        <CreateForm />
        <AllAnimal />
      </div>
    );
  }
}

export default App;
