import './App.css';
// import Calendar from 'rc-calendar';
import React from 'react';
import ColorSchemesExample from './components/ColorSchemesExample.js'
import Calendar from './components/Calendar.js'
// import ReactDOM from 'react-dom';
// ReactDOM.render(, container);
// import Calendar from "./components/Calendar"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ColorSchemesExample />
      <Calendar />
        <h1>hello</h1>
      </header>
    </div>
  );
}

export default App;
