import React from 'react';

const styles = {
  padding: "19px 0px 0px 0px"
};

const Header = () => ( 
  <nav className="navbar is-fixed-top is-danger">
    <div className="navbar-brand">
        <a href={`${process.env.PUBLIC_URL}/`}><span className="navbar-item has-text-weight-semibold is-size-4 has-text-white">Restoservice</span></a>
        <small className="has-text-weight-light" style={styles}> v1.0</small>
        <div className="navbar-burger burger" data-target="navMenuColorinfo-example"> <span /> <span /> <span />
        </div>
    </div>

    <div className="navbar-menu">
        <div className="navbar-end">
    
        </div>
    </div>
  </nav>
);

export default Header;