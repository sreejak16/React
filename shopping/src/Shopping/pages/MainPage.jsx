

import React, {useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'

import {Gents, Ladies} from '../data'
import WomanCollection from '../Components/WomanCollection'

const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)

  console.log(Gents)

  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion= {gentsFashion}/>
        <WomanCollection ladiesFashion = {ladiesFashion} />
        <Footer />
    </div>
  )
}

export default MainPage