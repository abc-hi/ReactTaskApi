import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Product = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://65e4940b3070132b3b24f644.mockapi.io/product")

      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete =async(id) => {
    await axios
      .delete(`https://65e4940b3070132b3b24f644.mockapi.io/product${id}`)
      .then(res => setDeleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
   
    <div className="container-table" >
      <table class="table"style={{ backgroundColor: "green" }}>
        <thead>
          <tr>
            <th scope="col"style={{ backgroundColor: "green" }}>Serial Number</th>
            <th scope="col"style={{ backgroundColor: "green" }}>Image</th>
            <th scope="col"style={{ backgroundColor: "green" }}>Name</th>
            <th scope="col"style={{ backgroundColor: "green" }}>Description</th>
            <th scope="col"style={{ backgroundColor: "green" }}>stock</th>
            <th scope="col"style={{ backgroundColor: "green" }}>quality</th>
            
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.image}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.stock}</td>
                  <td>{item.quality}</td>
                  
                  <td>
                    <button onClick={() => {handleEdit(item.id)}}style={{ backgroundColor:"orange" }}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => {handleDelete(item.id)}}style={{ backgroundColor:"red" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <button onClick={()=>{navigate('/create')}} style={{ backgroundColor:"green" }}>Create</button>
    </div>
  );
};

export default Product;
