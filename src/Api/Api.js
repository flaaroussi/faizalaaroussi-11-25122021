import data from '../datas/logements.json'
import dataAccordions from '../datas/apropos.json'

export default class Api {
   getLogements(){
      return data; 
   }
   
   getLogement(id){
      return  data.find(current => current.id === id);
   }

  

   getDataAccordions(){
      return dataAccordions;
   }
}