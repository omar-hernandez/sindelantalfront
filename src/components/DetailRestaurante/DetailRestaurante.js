import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const GET_RESTAURANTE = gql`

    query HOUSE($id:ID!){
        singleTienda(id:$id){
            nombre,
            productos{
                nombre,
                descripcion,
                precio,
                fotos_producto
            },
            descripcion,
            foto_tiendas,
            nivel_precio,
            calificacion{
                estrellas,
                comentario
            }

        }
    }

`




class DetailRestaurante extends Component{

    constructor(props){
        super(props)

        this.state = {
            id:props.match.params.id
        }
    }


    render(){
        return(
            <Query query={GET_RESTAURANTE} variables={{id:this.state.id}}>
                {({loading,error,data}) =>{
                    if(loading) return (<h4>Loading...</h4>)
                    if(error) return (<h4>No se encuentra el restaurante</h4>)
                    let tienda = data.singleTienda

                    return(
                        <div className="row justify-content center">
                            <div> 
                                <div className="col-lg-12 col-ms-12">
                                    <h4>{tienda.nombre}</h4>
                                    <img className="card-img-top" src={tienda.foto_tiendas} alt="Card image cap"/>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <h5>Nivel de precios {tienda.nivel_precio}</h5>
                                    <h5>{tienda.descripcion}</h5>
                                </div>
                            </div>
                            <div className="col-12 justify-content center">
                                <div className="card">
                                    <h5>Platillos</h5>
                                    {
                                        tienda.productos.map((productos)=>(
                                            <div className="card">
                                                <h5>{productos.nombre}</h5>
                                                <p>{productos.descripcion}</p> 
                                                <p>{productos.precio}</p> 
                                                <img className="card-img-top" src={productos.fotos_producto} alt="Card image cap"/>
                                            </div>    
                                        ))    
                                    }
                                </div>
                            </div>
                        </div>    
                    )
                }}
            </Query>
        )
    }



}

export default DetailRestaurante