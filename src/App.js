import React, {useState} from 'react';
import './App.css';
// import Calendar from 'rc-calendar';
// import React from 'react';

import ColorSchemesExample from './components/ColorSchemesExample.js'
import Calendar from './components/Calendar.js'
import Home from './components/Home';
// import ReactDOM from 'react-dom';
// ReactDOM.render(, container);
// import Calendar from "./components/Calendar"

function App() {

  const [perioddays,setperioddays] = useState(0)
const [cycledays,setcycledays] = useState(25)

  return (
    <div className="App">
      <header className="App-header">
      <ColorSchemesExample />
      <Home />
    
      </header>
    </div>
  );
}

export default App;
