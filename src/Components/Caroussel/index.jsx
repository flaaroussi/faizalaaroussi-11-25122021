import { Component } from "react"
import './Caroussel.scss'



export default class Caroussel extends Component{

   render (){
      const {pictures} =this.props
      return <section className="caroussel">

        {
         pictures.map((picture, index) => { 
            const imgClass = (index === 0) ? "caroussel__image" : "caroussel__hidden"          
           return  <img src={picture} key={`caroussel-${index}`}  id={`caroussel-${index}`} alt="Carousselimage" className={imgClass} />
         })
         }
      </section>
   }

}