import React from 'react'
import Actividad from './Actividad'
import Banner from './Banner'
import Header from './Header'
import Introduccion from './Introduccion'
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
      </div>
    </div>
  )
}

export default Inicio