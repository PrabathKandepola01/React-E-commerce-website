import React from 'react'
import Hero from '../Componets/Hero/Hero';
import Popular from '../Componets/Popular/Popular';
import Offer from '../Componets/Offer/Offer';
import Newcollection from '../Componets/Newcollection/Newcollection';
import NewsLetter from '../Componets/NewsLetter/NewsLetter';
import Lebel from '../Componets/Lebel/Lebel'

const Shop = () => {
  return (
    <div>
     <Lebel />
     <Hero />
     <Popular />
     <Offer />
     <Newcollection />
     <NewsLetter />
    </div>
  )
}
export default Shop
