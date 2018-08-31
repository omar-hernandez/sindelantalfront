import React, {Component} from 'react';
import './footer.scss'

class Footer extends Component{

    render(){
        return(
            <div className="Footer row text-center">
                <div className="Footer-acerca col-md-6">
                    <h2 className="Footer-titulo ">Acerca de Sin delantal:</h2>
                    <p className="Footer-text">Quienes somos</p>
                    <p className="Footer-text">Terminos y Condiciones</p>
                </div>
                <div className="Footer-contacto col-md-6">
                    <h2 className="Footer-titulo">Contacto:</h2>
                    <p className="Footer-text">christopher.ramirezdev@gmail.com</p>
                    <p className="Footer-text">omar.hd.leon@gmail.com</p>
                </div>
            </div>
        )

    }

}

export default Footer