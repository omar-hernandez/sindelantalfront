import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import './detailRestaurante.scss';

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

            <div className="container-fluid">
            <Query query={GET_RESTAURANTE} variables={{id:this.state.id}}>
                {({loading,error,data}) =>{
                    if(loading) return (<h4>Loading...</h4>)
                    if(error) return (<h4>No se encuentra el restaurante</h4>)
                    let tienda = data.singleTienda

                    return(
                        
                        <div className="row d-flex flex-row justify-content-center align-items-center">
                            <div className="restCont justify-content-center"> 
                                <div className="col-lg-12 col-ms-12">
                                    <div className="d-flex flex-row justify-content-center align-items-center backgroundImg">
                                        <img className="card-img-top img-fluid img-thumbnail mx-auto restLogo" src={tienda.foto_tiendas} alt="Card image cap"/>
                                    </div>
                                    <h1 className="restName text-center">{tienda.nombre}</h1>
                                </div>
                                <div className="col-md-8 col-lg-8 restDescr">
                                    <h5>Nivel de precio: {tienda.nivel_precio}</h5>
                                    <h5 className="descType">{tienda.descripcion}</h5>
                                </div>
                            </div>
                            <div className="col-12 justify-content center">
                                <h1 className="dishes text-center">Platillos</h1>
                                <div className="card">
                                    {
                                        tienda.productos.map((productos)=>(
                                            <div className="card foodCard ">
                                                <div className="d-flex flex-row justify-content-center align-items-center">
                                                    <img className="card-img-top foodImg img-thumbnail" src={productos.fotos_producto} alt="Card image cap"/>
                                                </div>
                                                <div className="foodDesc ">
                                                    <h5 className="productName">{productos.nombre}</h5>
                                                    <p className="foodD">{productos.descripcion}</p> 
                                                    <p className="foodD">Precio: ${productos.precio}</p> 
                                                </div>  
                                            </div>    
                                        ))    
                                    }
                                </div>
                            </div>
                        </div>    
                    )
                }}
            </Query>
            </div>

           
        )
    }



}

export default DetailRestaurante