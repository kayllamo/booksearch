import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Filters from './Filters';


function App() {
  return (
    <div className="App">
      
        <Header />
        <Search />
        <Filters />
    </div>
  );
}

export default App;
