import React, {Component} from 'react';
import RestauranteCard from './RestauranteCard/RestauranteCard';
import gql from 'graphql-tag';
import {Query} from 'react-apollo' ;
import Footer from '../Footer/Footer'


const GET_HOUSES = gql`
    query{
        allTiendas{
            _id,
            nombre,
            descripcion,
            foto_tiendas,
            nivel_precio,
            calificacion{
                estrellas
            },
            tipo{
                nombre
            }
        }

    }
`;

class RestaurantesList extends Component{

    constructor(props){
        super(props);
    }


    redirectDetail = (id) => (
        this.props.history.push(`/restaurante/${id}`)
    )

    renderHouses = () => (
        <Query query={GET_HOUSES}>
            { ({loading,error,data})=>{
                if(loading) return (<h4>Loading....</h4>);
                if(error) return (<h4>No hay restaurantes</h4>);

                return(
                    <div className="container-fluid">
                        <div className="row justify-content-center mt-5">
                        {data.allTiendas.map((tienda)=>(
                            <div className="col-md-3 col-lg-2">
                                <RestauranteCard tienda={tienda}
                                    redirect={this.redirectDetail}
                                />

                            </div>
                        ))}
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Footer/>
                    </div>
                )
            }}

        </Query>
    )


    render(){
        return this.renderHouses();
    }


}

export default RestaurantesList;