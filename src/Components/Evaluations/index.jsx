import { Component } from "react"

export default class Evaluations extends Component{

   render(){
      const {id, rating} = this.props
      const range = [1, 2, 3, 4, 5]
     

      return <article className="stars" id={id}>
         {range.map((rangeElem) =>
         rating >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
     )}
         
      </article>
   }
} 