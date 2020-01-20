import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Contact from './Components/Contact/Contact'
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        {Routes}
        <a id='ContactUs' href='#ContactUs'><Contact/></a>
      </Router>
    
    </div>
  );
}

export default App;
