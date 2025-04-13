import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = props => {
  return (
    <footer className="text-muted bg-dark py-4">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>

        <div style={{ flex: '1 1 45%', minWidth: '250px', marginRight: '2rem' }}>
          <p style={{ textAlign: "left" }}>Phone:</p>
          <p style={{ textAlign: "left" }}>
            Call Customer Service at <br />
            1-888-869-6828, Monday to Friday, <br />
            8am to 6pm AST.
          </p>
        </div>

        <div style={{ flex: '1 1 45%', minWidth: '250px' }}>
        <p >
          page links <br/>
            <Link to="/">Home</Link><br />
            <Link to="/inventory">Inventory</Link><br />
            <Link to="/aboutus">About us</Link><br />
            <Link to="/contact">Contact</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
 
export default Footer;