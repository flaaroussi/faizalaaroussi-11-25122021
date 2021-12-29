import { Component, Fragment } from 'react';
import { Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Acceuil from './Pages/Acceuil';
import Apropos from './Pages/Apropos';
import Erreur from './Pages/Erreur';
import Router from './Routes/Routes';


export default class App extends Component {

  render(){
    return (

      <Fragment>
        <Header />
        <Router />
      </Fragment>

    );
  }
 
}

