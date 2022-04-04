import React from 'react'
import Actividad from './Actividad'
import Banner from './Banner'
import Cobit from './Cobit'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Introduccion from './Introduccion'
import Itil from './Itil'
import Objetivos from './Objetivos'

const Inicio = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className="container">
        <Objetivos/>
        <Introduccion/>
        <Actividad/>
        <Cobit/>
        <Itil/>
      </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Inicio