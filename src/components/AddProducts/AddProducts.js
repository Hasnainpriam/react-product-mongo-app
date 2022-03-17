import React, { useRef } from 'react';

const AddProducts = () => {
  const nameRef=useRef();
  const priceRef=useRef();
  const quantityRef=useRef();
  const handleSubmit=e=>{
   const name=nameRef.current.value;
   const price=priceRef.current.value;
   const quantity=quantityRef.current.value;
    
   const newProduct={name:name,price:price,quantity:quantity};
   fetch('http://localhost:5000/products',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct)
   }).then(res=>res.json())
   .then(data=>{
     if(data.insertedId){
       alert('Data added Successfully.');
       e.target.reset();
     }
   })


    e.preventDefault();
  }
  return (
    <div>
      <h1>Add products</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <input type="text"  ref={priceRef} />
        <input type="text"  ref={quantityRef} />
        <input type="submit" value='Submit' />
      </form>
    </div>
  );
};

export default AddProducts;