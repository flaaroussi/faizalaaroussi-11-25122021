import { Component } from "react";
import Api from '../../Api/Api.js'
import './Annonces.scss'


export default class Annonces extends Component{

   render(){
      const api = new Api();
      const logementsData = api.getLogements();
      console.log(logementsData[0])

      return <section className="annonces">
         {
         logementsData.map(({id, title,cover}) => {            
           return  <article key={id}>{title}</article>
         })
         }
   </section>
   }
}