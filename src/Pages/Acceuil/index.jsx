import { Component } from 'react'
import Card from '../../Components/Card'
import Banner from '../../Components/Banner'
import Api from '../../Api/Api.js'
import './Acceuil.scss'


export default class Acceuil extends Component{

   render(){
      const api = new Api();
      const logementsData = api.getLogements();

      return <main className="main page-acceuil">
         <Banner bannerClass="banner__acceuil" title='Chez vous, partout et ailleurs' />
         <section className="annonces">
         {
            logementsData.map(({id, title, cover}) => {            
            return  <Card key={id} id={id} titre={title} cover={cover} />
            })
         }
         </section>
      </main>
   }
} 