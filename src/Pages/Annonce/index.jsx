import { Component } from "react"
import Api from '../../Api/Api.js'
import Tags from "../../Components/Annonce/Tags/index.jsx";
import AnnonceTitre from "../../Components/Annonce/Titre/index.jsx";
import Caroussel from "../../Components/Caroussel";
import Erreur from "../Erreur";

export default class Annonce extends Component{
   render(){
      const id = window.location.pathname.split("/annonce/").pop();
      console.log(id)
      const api = new Api();
      const logementData = api.getLogement(id);
      //si les données n'existent pas afficher la page d'erreur
      if(!logementData){
         return <Erreur />
      }
      console.log(logementData)
      return <main className="main annonce">
         <Caroussel pictures={logementData.pictures}/>
         <AnnonceTitre titre={logementData.title} adresse={logementData.location} />
         <Tags tags={logementData.tags}/>
         
      </main>
   }
}
