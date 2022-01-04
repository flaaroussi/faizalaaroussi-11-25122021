import React, { Component } from "react"
import { ReactComponent as ArrowLeft }  from '../../assets/images/ArrowLeft.svg'
import { ReactComponent as ArrowRight }  from '../../assets/images/ArrowRight.svg'
import './Caroussel.scss'



export default class Caroussel extends Component{
   constructor(props){
      super(props);
      this.state = {currentIndexSelected: 0};
   }
   getTotalPictures(){
      const {pictures} = this.props
      return  pictures.length-1
   }

   prevSlide(){
      let newCurrentIndex = this.state.currentIndexSelected
      if(newCurrentIndex === 0 ){ 
         newCurrentIndex = this.getTotalPictures()      
      }else{
         newCurrentIndex--
      }
      this.setState({currentIndexSelected:newCurrentIndex})
   }

   nextSlide(){
      let newCurrentIndex = this.state.currentIndexSelected

      if(newCurrentIndex < this.getTotalPictures()){         
         newCurrentIndex++;
      }else{
         newCurrentIndex = 0
      }
      this.setState({currentIndexSelected: newCurrentIndex})
   }

   getLegend(){
      return  (this.state.currentIndexSelected+1) + ' / ' + (this.getTotalPictures()+1)
   }
   render (){

      const {pictures} = this.props    
      return <section className="caroussel">
            <div className="caroussel__navigation">
               <ArrowRight alt="arrow" className="caroussel__chevron-g" onClick={(e) => this.prevSlide()}/>
               <ArrowLeft alt="arrow" className="caroussel__chevron-d" onClick={(e) => this.nextSlide()}/>
            </div>

         {
            pictures.map((picture, index) => { 
               const imgClass = (index === this.state.currentIndexSelected ) ? "caroussel__image" : "caroussel__hidden"          
               return  <img src={picture} key={`caroussel-${index}`}  id={`caroussel-${index}`} alt="Carousselimage" className={imgClass} />
         
            })
         } 
         <div className="caroussel__legend">
               {
                  this.getLegend()
               }
         </div>
      
         
      </section>
   }

}