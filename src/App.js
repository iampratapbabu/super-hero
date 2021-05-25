import React,{Fragment} from 'react';
import { Route,Switch } from "react-router-dom";

import './App.css';

//components files
import About from './components/About';
import Superhero from './components/Superhero';
import Villain from './components/Villain';
import Search from './components/Search';

//layout files
import Header from './layout/Header';
import Footer from './layout/Footer';


function App() {
  return (
    <Fragment>
       <Header/>
      <div className="container">
      
        
        <Switch>
          <Route exact path='/'component={About}/>
          <Route exact path='/superhero'component={Superhero}/>
          <Route exact path='/villain'component={Villain}/>
        </Switch>
      
      </div>
      <Footer/>
      
    </Fragment>
    
    
     
    
  );
}

export default App;
