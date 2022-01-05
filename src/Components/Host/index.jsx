import { Component } from "react";
import './Host.scss'


export default class Host extends Component{

   render(){
      const{picture, name} = this.props
      return <aside className="host">
            <div className="host__name">{name}</div>
            <img className="host__img" src={picture} alt="hostImage" />

        
   </aside>
   }
}
