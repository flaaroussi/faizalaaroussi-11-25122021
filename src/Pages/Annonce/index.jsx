import { Component } from "react"
import Api from '../../Api/Api.js'
import Tags from "../../Components/Annonce/Tags/index.jsx";
import Host from "../../Components/Host/index.jsx";
import AnnonceTitre from "../../Components/Annonce/Titre/index.jsx";
import Caroussel from "../../Components/Caroussel";
import Erreur from "../Erreur";
import './Annonce.scss'
import Stars from "../../Components/Stars/index.jsx";
import Accordion from "../../Components/Accordion/index.jsx";
 
export default class Annonce extends Component{
   render(){
      const id = window.location.pathname.split("/annonce/").pop();
      const api = new Api();
      const logementData = api.getLogement(id);
      //si les données n'existent pas afficher la page d'erreur
      if(!logementData){
         return <Erreur />
      }

      
      let lis = logementData.equipments.map((name) => {            
         return  <li key={id}>{name}</li>
       })

       let templateEquipements = "<ul>"+lis+"</ul>"


      return <main className="main annonce">
         <Caroussel pictures={logementData.pictures}/>

         <section className="annonce__blocs">
            <div className="annonce__blocs__bloc">
               <AnnonceTitre titre={logementData.title} adresse={logementData.location} />
               <Tags tags={logementData.tags}/>
            </div>
            <div className="annonce__blocs__bloc">
               <Host name={logementData.host.name} picture={logementData.host.picture}/>            
               <Stars rating={logementData.rating}/>
            </div>
         </section>   

            <div className="annonce__warpper">
               <Accordion content={logementData.description} titre="Déscription"/>
               <Accordion content={logementData.equipments} titre="Équipements"/>            
            </div>
      </main>
   }
}
