import logo from './logo.jpg';
import './App.css';
import React from 'react';

class Test extends React.Component {
  render() {
    return <div>
      <img src={logo} className="App-logo"/>
      <p>Hello World!</p>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test />
      </header>
    </div>
  );
}

export default App;
