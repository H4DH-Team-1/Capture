import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h4 className="display-2"> Capture Form</h4>
        <div className="container my-3 pt-3">
          <form>
            <div className="row pt-3 my-3">
              <label className="col-3">Name: </label>
              <input type="text" className="form-control col-5" />
            </div>
            <div className="row my-3 pt-3">
              <label className="col-3">Phone: </label>
              <input type="text" className="form-control col-5" />
            </div>
            <div className="row my-3 pt-3 center">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
