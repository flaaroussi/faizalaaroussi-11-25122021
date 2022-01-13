import { Component } from "react";
import { ReactComponent as ArrowUp }  from '../../assets/images/ArrowUp.svg'
import { ReactComponent as ArrowDown }  from '../../assets/images/ArrowDown.svg'
import './Accordion.scss'
import propTypes from "prop-types";

//Création d'un composant accordion 
export default class Accordion extends Component{
   // On va créer notre state dans la méthode constructor() de notre composant
   constructor(props){
      // Super (proprs), nous permet d'utiliser les méthodes de React.Component
      super(props);
      this.state = {
          // On stocke ici notre state 0 >> close,  1 >> open,  et par défaut c'est fermé  = 0
         IsOpenToggle: 0 
      };
   }
   /**
    * permet d'ouvrir ou de fermer l'accordion
    */
   doToggle(){
      let currentState = this.state.IsOpenToggle;
      //si je clique,si la valeur de isOpenToggle = 1  
      //this.setState va faire passer la valeur de isOpenToggle à 0 sinon c'est le contraire
      const newState =  (currentState === 1) ? 0: 1;
      this.setState({IsOpenToggle : newState})   
   }

   render(){
      const{content, titre} = this.props          
      return <article className="accordion"> 
         <div className="accordion__header">

            <div className="accordion__header__titre">{titre}</div>

            {
               //si IsOpenToggle  === 1 alors arrow up et quand je clique IsOpenToggle  deviens === 0 
               (this.state.IsOpenToggle  === 1) ?            
               <ArrowUp alt="arrowhaut" className="accordion__header__toggle" onClick={(e) => this.doToggle()}/>
               :
               //sinon IsOpenToggle  === 0 alors arrow down et quand je clique IsOpenToggle  deviens === 1 
               <ArrowDown alt="arrowdown" className="accordion__header__toggle" onClick={(e) => this.doToggle()}/>  
            }

         </div>
         
         <div className={"accordion__body " + ((this.state.IsOpenToggle === 0) ? 'hide' : '')}>
             {
                //si le contenu est string alors afficher un string.
             (typeof(content) === 'string') ?  content
             :
               //sinon afficher le contenu sous forme de liste.
               <ul className="accordion__liste">
                  {
                     content.map((item, index) => {
                        return <li key={index}>{item}</li>
                     })
                  }
               </ul>
             }   

         </div>    
      </article>
   }

   
}

//Valider le type des propriétés
Accordion.propTypes ={
  //content peut etre sous forme de 2 types >> string or array 
  content: propTypes.oneOfType([propTypes.string, propTypes.array]),
  titre: propTypes.string 
}