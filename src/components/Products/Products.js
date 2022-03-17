import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {
  const [products,setProducts]=useState([])
  // const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  const handleDelete = id =>{
      const proceed= window.confirm("Are you sure?")
      if(proceed){
        const url=`http://localhost:5000/products/${id}`
        fetch(url,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
               alert('Deleted Successfully');
               var remainingProducts=products.filter(product=> product._id !== id);
               setProducts(remainingProducts);
          }
        })
      }
  }

  return (
    <div>
      <h1> Products</h1>
      <h2>Total : {products.length}</h2>
      <ul>
      {
        products.map(product=><li key={product._id}>
          {product.name} || Price:{product.price} || Q:{product.quantity}
          <br /> 
          <Link to={`/products/update/${product._id}`}><button>Update</button></Link>
            <button onClick={()=>{handleDelete(product._id)}}>Delete</button>
          </li>)
      }
      </ul>
    </div>
  );
};

export default Products;