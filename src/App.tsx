import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Routes from "./components/Header/Routes";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
      </header>
        <Routes/>
    </div>
  );
}

export default App;
