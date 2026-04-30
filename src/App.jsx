import {useState} from 'react';
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner';
import Poster from './Components/Poster/Poster';
import AllProducts from './Components/Allproducts/AllProducts';
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';

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
    </>
  )
}

export default App
