import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const GET_HOUSE = gql`

    query HOUSE($id:ID!){
        singleTienda(id:$id){
            nombre,
            productos{
                nombre,
                descripcion,
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
            <Query query={GET_HOUSE} variables={{id:this.state.id}}>
                {({loading,error,data}) =>{
                    if(loading) return (<h4>Loading...</h4>)
                    if(error) return (<h4>No se encuentra el restaurante</h4>)
                    let tienda = data.singleTienda

                    return(
                        <div className="row justify-content center">
                            <div className="col-lg-12 col-ms-12">
                                <h4>{tienda.nombre}</h4>
                                {/* {
                                   tienda.foto_tiendas.map((foto_tienda)=>(
                                        <img src={foto_tienda} alt=""/>
                                    ))
                                } */}
                            </div>
                            <div className="col-md-8 col-lg-8">
                                <h5>Nivel de precios {tienda.nivel_precio}</h5>
                                <h5>{tienda.descripcion}</h5>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <h5>Platillos</h5>
                                {
                                    tienda.productos.map((productos)=>(
                                        <p>{productos.nombre} {"   Descripción: "}
                                            {productos.descripcion}
                                        </p>
                                        // <li>{productos.fotos_producto}</li>
                                    ))    
                                }

                            </div>
                        </div>    
                    )

                }}


            </Query>
        )
    }



}

export default DetailRestaurante