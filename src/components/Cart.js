import React,{useContext} from 'react';
import {TvContext} from '../App'
import {Link} from 'react-router-dom'

function Cart() {

    let context = useContext(TvContext)
    let cartPrice = 0;

    let handleRemove = (e)=>{ 
          context.cart.splice(context.cart.indexOf(e),1)
          context.setCartValue(context.cart.length)
    }

  return <div className="product-wrapper">
  <h2>CART</h2>
  {
    context.cart.length>0?<>
      {
        context.cart.map((e,i)=>{
          cartPrice = cartPrice + Number(parseInt(e.price.split(",").join("")));
          console.log(cartPrice)
        return <div key={i} className="product-item-wrapper" >
                <div className="product-image">
                  <img src={e.image} alt={e.image}/>
                </div>   
                <div className= "product-detail">
                  <h4>{e.name}</h4>
                  <div className="product-price">&#x20b9;{e.price}</div>
                  <div className ="product-rating">Rating: {e.rating}</div>
                  <button className="btn btn-primary product-btn" onClick={() => handleRemove(e)}>Remove</button>
                </div>
        </div>
      })
      }
      <div className="placeholder-wrapper">
        <div>
        <div className="product-price">Total Price : {cartPrice}</div>
          <Link to='/'> <button className="btn btn-primary" onClick={ () =>{
              context.setCart([])
              context.setCartValue(0)
          }}>Place Order</button></Link>
        </div>
      </div>
    </>:<h2 className="no-product"> NO Products </h2>
    
  }
</div>
}

export default Cart;
