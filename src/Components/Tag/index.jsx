import { Component } from "react";
import './Tag.scss'

export default class Tag extends Component{
   render (){
      const {name} = this.props
      return <div className="tag">
         {name}
      </div>
   }
}