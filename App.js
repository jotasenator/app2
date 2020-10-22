import React from 'react';
import './App.css';
import Links from './componentes/links'
import MyHistoryPython from './componentes/myHistoryPython'
import MyHistoryJS from './componentes/myHistoryJS'


function App() {
  return (
    <div className="App">
      <div className='fixed'>
        <div className='navbar'>
          <h3 > Blog de joTas</h3>
          < Links />
        </div>
      </div>
      <div className='container'>
        <div className='content1' >
          <MyHistoryPython />
        </div>

        <div className='content2' >
          <MyHistoryJS />
        </div>
      </div>
      <footer>

      </footer>
    </div >
  );
}

export default App;
