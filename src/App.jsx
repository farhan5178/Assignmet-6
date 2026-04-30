import {useState} from 'react';
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner';
import Poster from './Components/Poster/Poster';
import AllProducts from './Components/Allproducts/AllProducts';
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';
import Cart2 from './Components/Cart2/Cart2';
import PricingCard from './Components/PricingCard/PricingCard';
import BotoomBanner from './Components/Botoombanner/BotoomBanner';
import Footer from './Components/Footer/Footer';

function App() {
//  eita mother file eikhan theke sob kichu easyly access kora jay jar jnno cart ta eikhane proxing korechi 
const [carts,setCarts]=useState([])
  return (
    <>
    
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
      <Poster></Poster>
      <AllProducts carts={carts} setCarts={setCarts}></AllProducts>
      <Toaster/>
      <Cart2></Cart2>
      <PricingCard/>
      <BotoomBanner></BotoomBanner>
      <Footer/>
    </>
  )
}

export default App
