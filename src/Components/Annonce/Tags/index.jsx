import { Component } from "react";
import Tag from "../../Tag";
import './Tags.scss'

export default class Tags extends Component{
   render (){
      const {tags} = this.props
      return <div className="tags">
          {
         tags.map((tag, index) => { 
           return  <Tag key={`tag-${index}`} name={tag} />
         })
         }
      </div>
   }
}