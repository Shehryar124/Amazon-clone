import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__img' src='https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=720&w=1280' alt=''/>
        </div>

        <div className='home__row'>
            <Product title='The lean startup' image='https://bukharibooks.com/wp-content/uploads/2020/01/the-lean-startup.png' price={29.99} rating = {4}/>
            <Product title='Kenwood kMix Stand Mixer for Baking' price={239.0} rating = {3} image = 'https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg'/>
        </div>

        <div className='home__row'>
          <Product title='Samsung LC49RG90SSUXEN 49-inch' price = {49.99} rating = {5} image = 'https://m.media-amazon.com/images/I/61oVYpKCOIL._AC_SL1200_.jpg' />
          <Product title='Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric' price={51.9} rating = {5} image = 'https://m.media-amazon.com/images/I/71G3mBZJWPL._AC_SL1500_.jpg'/>
          <Product title='New Apple iPad Pro (12.9-inch, Wi-Fi, 120GB) - Silver (4th Generation)' price={598.99} rating = {4} image = 'https://m.media-amazon.com/images/I/91K+RJnuBhL._AC_SL1471_.jpg'/>
        </div>

        <div className='home__row'>
          <Product title='Curved LED Smart Watch by Samsung' price={199.99} rating = {3} image = 'https://m.media-amazon.com/images/I/71MuveD1LPL._AC_SL1500_.jpg'/>
        </div>
    </div>
  )
}

export default Home