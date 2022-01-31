import React,{useContext} from 'react';
import {TvContext} from '../App'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'

function Header() {
    let context = useContext(TvContext); 
  return <div className="head-wrapper bg-primary text-center ">
  
      <div className="head-title">
        <Link to="/Home" className="head-quality">
          Best Quality TV  
        </Link>  
      </div>
  
      <div className="head-cart">
        <Link to="/cart"><ShoppingCartIcon/></Link>
        <span className="count">{context.cartValue}</span>
    </div>
  </div>
}

export default Header;
