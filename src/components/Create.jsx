import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate=useNavigate()
    const[editData,setEditData]=useState({

     image:'',
        name:'',
       
    descriptlion:'',
        stock:'',
        quality:'',
        
     
    })
    const handleChange=(e)=>{
        const{name,value}=e.target   //e.target.name    e.target.value
        setEditData((preData)=>({
            ...preData,[name]:value

        }

        ))
    }
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        await axios.post(`https://65e4940b3070132b3b24f644.mockapi.io/product/`,editData)
        .then(res=>console.log(res.data))
.catch((err)=>console.log(err))
navigate('/product')

    }
    return (
        <div className='container' >
            <form onSubmit={handleFormSubmit}>
                <label> Image: <input type='text' name='image' value={editData.image} onChange={handleChange} />  </label><br />
                <label> Name: <input type='text' name='name' value={editData.name} onChange={handleChange} />  </label><br />
                <label> Description: <input type='text' name='description' value={editData.descriptlion} onChange={handleChange} />  </label><br />
                <label> Stock: <input type='text' name='stock' value={editData.stock} onChange={handleChange} />  </label><br />
                <label> Quality: <input type='text' name='quality' value={editData.quality} onChange={handleChange} />  </label><br />
                <button type='submit'>Create</button>


                
            </form>
        </div>
    );
};

export default Create;