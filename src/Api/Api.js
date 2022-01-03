import data from '../datas/logements.json'

export default class Api {
   getLogements(){
      return data; 
   }
   
   getLogement(id){
      return  data.find(current => current.id === id);
   }
}