// imrc
import React, { Component } from 'react';


// cc
class NavBar extends Component {
    state = { };
    render() { 
        return (
            <nav className="navbar fixed-top navbar-dark bg-primary">
                <a className="navbar-brand" href="/#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            
                
            
            
            
            </nav>
            


            );
    
    
    }
}
 
export default NavBar;

// Advanced ES6 Topics
// Arrow function, 
/// object destructuring,
// spread operator,
// array methods ( filter, map, sort)