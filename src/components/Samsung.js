import React,{useContext,useEffect,useState} from 'react';
import {TvContext} from '../App'
import {useNavigate} from 'react-router-dom'

function Samsung() {
  let context = useContext(TvContext)
  let [products,setproducts] = useState([]);
  let navigate = useNavigate()

  let getdata = () =>{
    if(context.data.length > 0){
      setproducts(context.data[1].subItems)
    }
    else{
      navigate('/')
    }
  }

  useEffect (()=>{
    getdata();
  },[])

  return <div className="product-wrapper">
   <h3>Samsung TV</h3>
      {
        products.map((e,i)=>{
          return <div key={i} className="product-item-wrapper">
                    <div className="product-image">
                      <img src={e.image} alt={e.name}/>
                    </div> 
                    <div className="product-detail">
                      <h4>{e.name}</h4>
                      <div className ="product-price">&#x20b9;{e.price}</div>
                      <div className ="product-rating">Rating: {e.rating}</div>
                      <button className="btn btn-primary product-btn" onClick={ () =>{
                      let print = context.cart.findIndex(c => c.name === e.name);
                      if (print === -1){
                        e["q"] = 1;
                        context.cart.push(e)
                        context.setCartValue(context.cart.length)
                      } else{
                        context.cart[print]["q"] += 1;
                      }
                      console.log(context.cart);
                      }}>Order Now</button>
                    </div>
                      
                  </div>
        })
      }
  </div>;
}

export default Samsung;
