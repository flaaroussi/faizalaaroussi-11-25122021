import { Component } from "react";
import { ReactComponent as Star }  from '../../assets/images/Star.svg'
import './Stars.scss'


export default class Stars extends Component{

   render(){
      const{rating} = this.props
      const stars = [1,2,3,4,5];
      return <aside className="rating"> 
             {
               stars.map((index) => { 
                  const color = (index <= rating)  ? '#FF6060' : '#E3E3E3'                   
                  return <Star key={index} className="rating__img" alt="StarImage" fill={color} />
               })
            }          
        
   </aside>
   }
}
