import React, {Component} from 'react';
import './navbar.scss'
import logo from '../../imagenes/logonavbar.png'
import isAuthenticated from '../../resolvers/isAuthenticated';
import payload from '../../resolvers/payload';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    checkAuthenticatedUser = () =>{
        if (isAuthenticated()){
            return(
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                        <Link className="nav-link newRes" to="/newrestaurante">Crear Restaurante</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/me">
                            Hola {payload().username}
                        </Link>
                    </li>
                </ul>
            )


        }else{
            return(
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">
                            Signup
                        </Link>
                    </li>
                </ul>
            )
        }
    }    
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                <img src={logo} width="215" height="65"/>
                </Link>    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseAirbnb" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

              

                <div className="collapse navbar-collapse" id="collapseAirbnb">
                        {this.checkAuthenticatedUser()}
                </div>

            </nav>
        )


    }



}

export default Navbar;



