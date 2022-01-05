import { Component } from "react";
import { ReactComponent as ArrowUp }  from '../../assets/images/ArrowUp.svg'
import { ReactComponent as ArrowDown }  from '../../assets/images/ArrowDown.svg'
import './Accordion.scss'



export default class Accordion extends Component{
   constructor(props){
      super(props);
      this.state = {IsOpenToggle: 1};
   }

   doToggle(){
      let currentState = this.state.IsOpenToggle;
      this.setState({IsOpenToggle : (currentState === 1) ? 0: 1})   

   }
   render(){
      const{content, titre} = this.props      
      return <article className="accordion"> 
         <div className="accordion__header">
            <div className="accordion__header__titre">{titre}</div>

            {
               (this.state.IsOpenToggle  === 1) ?            
               <ArrowUp alt="arrowhaut" className="accordion__header__toggle" onClick={(e) => this.doToggle()}/>
               :
               <ArrowDown alt="arrowhaut" className="accordion__header__toggle" onClick={(e) => this.doToggle()}/>  
         }
         </div>
         <div className={"accordion__body " + ((this.state.IsOpenToggle === 0) ? 'hide' : '')} >
             {
             
             (typeof(content) === 'string') ?  content

             :
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