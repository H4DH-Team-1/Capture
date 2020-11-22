import React from "react";
// import ReactDOM from "react-dom";
import "./App.css";

import Form from "../form/form";
import NavBar from "../NavBar/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="container my-3 pt-3">
          <NavBar />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
