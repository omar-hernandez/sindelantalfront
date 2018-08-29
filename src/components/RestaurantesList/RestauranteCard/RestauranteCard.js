import React, {Component} from 'react';
import './restauranteCard.scss';
import Rating from 'react-rating';
import {Redirect} from 'react-router-dom'

class RestauranteCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            id:props.tienda._id,
            nombre:props.tienda.nombre,
            tipo:props.tienda.tipo,
            descripcion:props.tienda.descripcion,
            foto_tiendas:props.tienda.foto_tiendas,
            nivel_precio:props.tienda.nivel_precio,    
            calificacion:props.tienda.calificacion
        }
    }

    calculateAVG = ()=>{
        if(this.state.calificacion.length === 0) return 0
        let suma = 0
        this.state.calificacion.forEach((calificacion)=>{
            suma += calificacion.estrellas
        })
        return suma/this.state.calificacion.length
    }



    render(){
        return(
            <div className="card card-propiedad" onClick={(e) => this.props.redirect(this.state.id)}>
                <img className="card-img-top" src={this.state.foto_tiendas} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-subtitle">{this.state.nombre}</h5>
                    <h6 className="card-text">Nivel de Precio: {this.state.nivel_precio}</h6>
                    <p className="card-text">{this.state.descripcion}</p>
                    <p className="card-text">{this.state.tipo}</p>
                    <Rating
                        emptySymbol="fa fa-star-o fa-2x star"
                        fullSymbol="fa fa-star fa-2x star"
                        readonly
                        fractions={2}
                        initialRating={this.calculateAVG()}
                    />
                </div>
            </div>
        )
    }




}

export default RestauranteCard;
