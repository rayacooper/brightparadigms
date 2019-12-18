import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        {Routes}
      </Router>
    
    </div>
  );
}

export default App;
