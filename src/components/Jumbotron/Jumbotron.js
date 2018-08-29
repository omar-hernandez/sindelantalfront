import React, { Component } from 'react';
import './jumbotron.scss';


class Jumbotron extends Component{


    render(){
        return(
            <section className="jumbotron text-center transparente">
                <img className="imgjumbotron" src={"https://www.archies.co/media/marguerita-DOC.png"}/>
                <img className="imgjumbotron" src={"http://toms-burgers-los-angeles.com/wp-content/uploads/2015/02/reco_img3.png"}/>

                <h1 className="display-3">Los mejores restaurantes en tu casa con un solo clic</h1>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                    <form action="" className="form-inline justify-content-center">
                        <label className="sr-only" htmlFor="search">Busqueda:</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-1">
                                    <input type="search" name="search" id="search" 
                                    className="form-control py-2 homesearch" placeholder="Escribe tu calle, número y colonia"/>
                                </div>
                        <button type="button" className="btn btn-search my-2" >Buscar restaurantes</button>
                    </form>
                </div>
            </div>

            </section>

        )

    }


}


export default Jumbotron;