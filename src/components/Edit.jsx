import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Edit = ({id}) => {
    const navigate=useNavigate()
    const[editData,setEditData]=useState({

       image:'',
       name:'',
       
        description:'',
        stock:'',
        qualilty:'',
       
     
    })
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
await axios.get(`https://65e4940b3070132b3b24f644.mockapi.io/product${id}`)
.then(res=>setEditData(res.data))
.catch((err)=>console.log(err));
    }

    const handleChange=(e)=>{
        const{name,value}=e.target   //e.target.name    e.target.value
        setEditData((preData)=>({
            ...preData,[name]:value

        }

        ))

    }
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        await axios.put(`https://65e4940b3070132b3b24f644.mockapi.io/product${id}`,editData)
        .then(res=>console.log(res.data))
.catch((err)=>console.log(err))
navigate('/product')

    }



    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <label> Image: <input type='text' name='image' value={editData.image} onChange={handleChange} />  </label><br />
                <label> name: <input type='text' name='name' value={editData.name} onChange={handleChange} />  </label><br />
                <label> description: <input type='text' name='description' value={editData.description} onChange={handleChange} />  </label><br />
                <label> stock: <input type='text' name='stock' value={editData.stock} onChange={handleChange} />  </label><br />
                <label> qualilty: <input type='text' name='quality' value={editData.qualilty} onChange={handleChange} />  </label><br />
                
                <button type='submit'>Update</button>


                
            </form>
        </div>
    );
};

export default Edit;