import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Topbar from './components/Topbar';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import TotalItems from './components/TotalItems';


function App() {
  return (
    <div className="App">
      <Topbar />
      <AddItem />
    </div>
  );
}

export default App;
