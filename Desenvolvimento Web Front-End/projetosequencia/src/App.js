import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home'
import PG1 from './Pagina1'
import PG2 from './Pagina2'
import PG3 from './Pagina3'

function App() {
  return (
    <div>
      <header>
        <Link to = '/Home'>Home</Link>
        <Link to = '/Pagina1'>Pagina1</Link>
        <Link to = '/Pagina2'>Pagina2</Link>
        <Link to = '/Pagina3'>Pagina3</Link>
      </header>
      <main>
        <Switch>
          <Route exact path = '/Home' component={Home}/>
          <Route path = '/Pagina1' component={PG1}/>
          <Route path = '/Pagina2' component={PG2}/>
          <Route path = '/Pagina3' component={PG3}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;