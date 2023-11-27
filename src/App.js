import React from 'react'
import { Navbar, Brand, Cta } from './components/index2';
import { Blog, Features, Footer, Header, Possibility, WhatDUCK } from './containers/index3';
import './App.css';


const App = () => {
  return (
    <div className= "App">
      <div className= "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatDUCK />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />

    </div>
  )
}

export default App 