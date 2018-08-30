import React, { Component } from 'react';
import './jumbotron.scss';

import {Link} from 'react-router-dom';



class Jumbotron extends Component{


    render(){
        return(
            <section className="jumbotron text-center transparente">
                <img className="imgjumbotron" src={"https://www.archies.co/media/marguerita-DOC.png"}/>
                <img className="imgjumbotron" src={"http://toms-burgers-los-angeles.com/wp-content/uploads/2015/02/reco_img3.png"}/>

                <h1 className="display-3">Los mejores restaurantes en tu casa con un solo click</h1>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                    <form action="" className="form-inline justify-content-center">
                        <label className="sr-only" htmlFor="search">Busqueda:</label>
                                <div className="input-group ">
                                    <input type="search" name="search" id="search" 
                                    className="form-control  homesearch" placeholder="Escribe tu calle, número y colonia"/>
                                </div>
                                <Link to="/restaurantes">
                                <button type="button" className="btn btn-search my-2" >Buscar restaurantes</button>
                                </Link>
                                
                    </form>
                </div>
            </div>

            </section>

        )

    }


}


export default Jumbotron;