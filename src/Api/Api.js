import data from '../datas/logements.json'
import dataAccordions from '../datas/apropos.json'

export default class Api {
   //Récuperer les données des annonces sous format json.
   getLogements(){
      return data; 
   }
   //Récuperer les données d'une annonce d'un id passé comme parametre sous format json.
   getLogement(id){
      return  data.find(current => current.id === id);
   }
   //Récuperer les données de la page apropos sous format json.
   getDataAccordions(){
      return dataAccordions;
   }
}