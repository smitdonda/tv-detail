import React,{Fragment,useContext} from 'react';
import {TvContext} from '../App'
import{Link} from 'react-router-dom'
function Home() {

  let context = useContext(TvContext);

  return <div className="home-wrapper">
    {
      context.data.map((e,i)=>{
        return<Fragment key = {i}>
          <Link to={`/`+e.name.replace(/ /g, '').toLowerCase()} className="item-link">
            <div className="item-wrapper">
              <img src={e.image} className="item-image" alt={e.name}/>
              <div className="item-name">{e.name}</div>
            </div>
          </Link>
        </Fragment>
      })
    }       

  </div>;
}
export default Home;
