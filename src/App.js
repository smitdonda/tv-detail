import './App.css';
import React,{useState,useEffect} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import axios from 'axios'
import Haier from './components/Haier'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import Lg from './components/LG'
import OnePlus from './components/OnePlus';
import Samsung from './components/Samsung'
import Sony from './components/Sony'
import Xiaomi from './components/Xiaomi'

const url = "https://mocki.io/v1/e8a90af3-c5ed-4053-8bbc-8c917f333427"

export const TvContext = React.createContext();
function App() {

  let [data,setData] = useState([]);
  let [cart,setCart] = useState([]);
  let [cartValue,setCartValue] = useState(cart.length);

  useEffect(()=>{
    getdata()
  },[])


  let getdata = async () =>{
    let res = await axios.get(url)
    console.log(res.data)
    setData(res.data)
  }

  return <>
    <BrowserRouter>
      <TvContext.Provider value = {{data,cart,setCart,cartValue,setCartValue}}>
        <Header/>
        <Routes>
          <Route path="/lg" element={<Lg/>}/>
          <Route path="/samsung" element={<Samsung/>}/>
          <Route path="/sony" element={<Sony/>}/>
          <Route path="/xiaomimi" element={<Xiaomi/>}/>
          <Route path="/oneplus" element={<OnePlus/>}/>
          <Route path="/haier" element={<Haier/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </TvContext.Provider>
    </BrowserRouter>
  </>
}

export default App;
 