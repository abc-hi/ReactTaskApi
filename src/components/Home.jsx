import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Home = () => {
    const[products,setProducts]=useState([]) 
    useEffect(()=>{
fetchData();
    },[])
    const fetchData=async()=>{
        await axios.get('https://65e4940b3070132b3b24f644.mockapi.io/product')
        
            .then(res=>setProducts(res.data))
            .catch((err)=>{console.log(err);})
        

    }
   



    return (
        <div style={{ backgroundColor: 'blue' }}>
        <div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  
    {products.map((item,index)=>{
    return(
        <>

        <div key={index}>
        <div className="col" >
    <div className="card">
      <img src={item.image} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p> 
        <h5 className="card-title">{item.stock}</h5>
        <h5 className="card-title">{item.quality}</h5>

       

        
      </div>
    </div>
  </div>
        </div>
        
        </>
    )
    })}
  </div>

</div>
</div>
    );
};

export default Home;