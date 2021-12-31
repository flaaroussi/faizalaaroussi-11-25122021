import { Component } from "react";
import Annonces from "../../Components/Annonces";
import Banner from '../../Components/Banner'


export default class Acceuil extends Component{

   render(){
      return <main className="main page-acceuil">
         <Banner bannerClass="banner__acceuil" title='Chez vous, partout et ailleurs' />
         <Annonces />
      </main>
   }
} 