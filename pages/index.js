import React from 'react'

import { Cart, Footer, FooterBanner, HeroBanner, Layout, Navbar, Product } from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {['product 1','product 2'].map((product) => (
          <div>{product}</div>
        ))}
      </div>

      <FooterBanner/>
    </>
  )
}

export default Home