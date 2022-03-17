import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';

const UpdateProducts = () => {
  const {id}=useParams();
  const [product,setProduct]=useState([]);
  useEffect(()=>{
   const url=`http://localhost:5000/products/${id}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>setProduct(data))
  },[])

//////
const handleName=e=>{
  const updatedName=e.target.value;
  const updatedProduct={name:updatedName,price:product.price,quantity:product.quantity};
  setProduct(updatedProduct)
}
const handlePrice=e=>{
  const updatedPrice=e.target.value;
  const updatedProduct={name:product.name,price:updatedPrice,quantity:product.quantity};
  setProduct(updatedProduct)
}
const handleQuantity=e=>{
  const updatedQuantity=e.target.value;
  //const updatedProduct={...product};
  //updatedProduct.quantity=updatedQuantity;
  const updatedProduct={name:product.name,price:product.price,quantity:updatedQuantity};
  setProduct(updatedProduct)
}
/////
const handleUpdate=e=>{
  const proceed= window.confirm('Are you sure?');
  if(proceed){
    const url=`http://localhost:5000/products/${id}` 
    fetch(url,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.modifiedCount>0){
         alert('Data updated Successfully.')
       }
    })
  }

  e.preventDefault();

}

  return (
    <div>
      <h1>Update Product</h1>
      <h3>{id}</h3>
      <form onSubmit={handleUpdate}>
          <input type="text" onChange={handleName} value={product.name||''} />
          <input type="text" onChange={handlePrice} value={product.price||''} />
          <input type="text" onChange={handleQuantity} value={product.quantity||''} />
          <input type="submit" value='Submit' />
      </form>

    </div>
  );
};

export default UpdateProducts;