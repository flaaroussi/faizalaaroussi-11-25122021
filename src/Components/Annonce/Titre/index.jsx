import { Component } from "react";
import './Titre.scss'

export default class AnnonceTitre extends Component{
   render(){
      const {titre, adresse} = this.props
      return <section className="annonce__titre">
            <h1>{titre}</h1>
            <h3>{adresse}</h3>
      </section>
   }
}