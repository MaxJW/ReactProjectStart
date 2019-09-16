import React from 'react';
import './App.css';

class Form extends React.Component {
  render() {
    return <form className="searchForm" action="">
    <input className="searchTerm" type="text" name="condition_search" placeholder="Enter condition here" />
    <input className="searchButton" type="submit" value="Submit"/>
    </form>;
  }
}

function App() {
  return (
    <div className="App">
      <div className="img-fill"></div>
      <div className="Main-content">
        <h1>What's wrong?</h1>
        <Form/>
      </div>
    </div>
  );
}

export default App;
