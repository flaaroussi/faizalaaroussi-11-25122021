import { Component } from "react";
import Api from '../../Api/Api.js'
import AnnonceCard from "../Annonce/Card/index.jsx";
import './Annonces.scss'


export default class Annonces extends Component{

   render(){
      const api = new Api();
      const logementsData = api.getLogements();
      console.log(logementsData[0])

      return <section className="annonces">
         {
         logementsData.map(({id, title,cover}) => {            
           return  <AnnonceCard key={id} id={id} titre={title} cover={cover} />
         })
         }
   </section>
   }
}