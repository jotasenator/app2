import React from 'react';
import './App.css';
import Navbar from './components/navBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyHistoryPython from './components/myHistoryPython'
import MyHistoryJS from './components/myHistoryJS'
import Inicio from './components/inicio'
import Contacto from './components/contacto'
import Footer from './components/footer';

function App() {
  return (
    <div>

      <BrowserRouter>
        < div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Inicio} />
            <Route path='/python' component={MyHistoryPython} />
            <Route path='/javascript' component={MyHistoryJS} />
            <Route path='/contacto' component={Contacto} />
          </Switch>
        </div >
      </BrowserRouter >
      <Footer />
    </div>






  );
}

export default App;
