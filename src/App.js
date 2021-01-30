import logo from './logo.svg';
import './App.css';
import "./globals/hack-styles.scss";

// Installed dependency imports
import {Route, Switch, BroswerRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is the start of our project using react
        </p>
      </header>
    </div>
  );
}

export default App;
