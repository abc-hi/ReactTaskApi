import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
   
    return (
        <div className="navbar-container">
        <div>
        
        <h1 style={{ fontFamily: 'Harrington', color:'white',fontSize:'37px'}}>Welcome to Reva's Ecommerce</h1>
        <h1 style={{ fontFamily: 'Harrington', color:'white',fontSize:'17px'}}>pick whatever you want</h1>
        <nav className="navbar">
         
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link> {/* Corrected the path */}
            </nav>
       
        </div>
        </div>
    );
};

export default Navbar;