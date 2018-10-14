import React from 'react';

const styles = {
  padding: "19px 0px 0px 0px"
};

const Header = () => ( 
  <nav className="navbar is-fixed-top is-danger">
    <div className="navbar-brand">
        <span className="navbar-item has-text-weight-semibold is-size-4">Restoservice</span>
        <small className="has-text-weight-light" style={styles}>
            v1.0
        </small>
        <div className="navbar-burger burger" data-target="navMenuColorinfo-example"> <span /> <span /> <span />
        </div>
    </div>

    <div className="navbar-menu">
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                <p className="control">
                    <a className="bd-tw-button button" data-social-network="Github" data-social-action="tweet" data-social-target="https://github.com/mcabreradev/truenorth-client" href="https://github.com/mcabreradev/truenorth-client">
                    <span className="icon"><i className="fab fa-github"></i></span>
                    <span>Fork me</span>
                    </a>
                </p>
                </div>
            </div>
        </div>
    </div>
  </nav>
);

export default Header;