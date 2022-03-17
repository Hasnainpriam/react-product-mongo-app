import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ marginTop:'2rem'}}>
      <Link to='/products' style={{textDecoration: 'none', padding:'3rem'}}>Products</Link>
      <Link to='/addProducts' style={{textDecoration: 'none', padding:'3rem'}}>Add Products</Link>
    </div>
  );
};

export default Header;