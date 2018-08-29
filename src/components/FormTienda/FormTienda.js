import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Mutation ,  Query} from 'react-apollo';
import GenericInput from '../GenericInput/GenericInput';
import FileUploader from 'react-firebase-file-uploader';
import Firebase from '../../Firebase';

const CREATE_TIENDA = gql`

    mutation AddTienda($data:Tiendas!){
        addTiendas(data:data){
            _id,
            nombre
        }
    }

`

const GET_TIPOS = gql`

    query{
        allTipoRest{
            _id,
            nombre
        }
    }

`

class FormTienda extends Component{

    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            tipo:[],
            telefono:55453,
            ubicacion:"",
            descripcion:"",
            nivel_precio:1,
            foto_tiendas:[]
        }
    }

    onInputChange = (event) =>{
        let {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    handleUploadSuccess = (filename) =>{
        Firebase.storage().ref('images').child(filename)
        .getDownloadURL().then(url=>{
            this.setState(prevState=>({
                foto_tiendas:[...prevState.foto_tiendas,url]
            }))
        })
    }

    handleUploadError = (error) =>{
        console.log(error)
    }

    onCheckBoxChange = (event) =>{
        this.setState(prevState => ({
            tipo:[...prevState.tipo,event.target.value]
        }))
    }


    onFormSubmit = (event,addTiendas) => {
        event.preventDefault();
        console.log(this.state)
    }

    renderQuery = () => (

        <Query query={GET_TIPOS}>
            { ({loading,error,data})=>{
                if(loading) return "Loading..."
                if(error) return "Error,No cargan los tipos de restaurantes"
                return data.allTipoRest.map((TipoRest)=>(
                    <label htmlFor="">
                        <input type="checkbox"
                            name="TipoRest"
                            value={TipoRest._id}
                            checked={()=>this.state.TipoRest.indexOf(TipoRest._id) !== -1}
                            onChange={this.onCheckBoxChange}
                        />
                        {TipoRest.nombre}
                    </label>    
                ))
            }

            }
        </Query>
    )

    render(){
        return(
            <Mutation mutation={CREATE_TIENDA}>
              {
                  (addTiendas,{data})=>(
                    <div className="row justify-content-center">
                        <form onSubmit={(e) => this.onFormSubmit(e,addTiendas)}>
                            <GenericInput name={"nombre"} 
                                type={"text"}
                                value={this.state.nombre}
                                change={this.onInputChange}
                            />
                            <GenericInput name={"telefono"} 
                                type={"number"}
                                value={this.state.telefono}
                                change={this.onInputChange}
                            />                            
                            <div className="form-group">
                                <label htmlFor="">Descripcion:</label>
                                <textarea cols="20" rows="1" className="form-control" value={this.state.descripcion} name="descripcion" onChange={this.onInputChange}></textarea>
                            </div>
                            <GenericInput name={"ubicacion"} 
                                type={"text"}
                                value={this.state.ubicacion}
                                change={this.onInputChange}
                            />

                            <div className="form-group">
                                <label htmlFor=""></label>
                                <select className="form-control" value={this.state.nivel_precio} onChange={this.onInputChange} name="nivel_precio">
                                    <option value={1}>Barato</option>
                                    <option value={2}>Medio</option>
                                    <option value={3}>Caro</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="btn btn-danger">
                                    Agrega imagenes 
                                    <FileUploader
                                        hidden
                                        accept="image/*"
                                        randomizeFilename
                                        multiple
                                        storageRef={Firebase.storage().ref('images')}
                                        onUploadError={this.handleUploadError}
                                        onUploadSuccess={this.handleUploadSuccess}
                                    />
                                </label>
                            </div>

                            <div className="from-group">
                                <label htmlFor="">Tipos Restaurante</label>
                                {
                                    this.renderQuery()
                                }
                            </div>

                            <button type="submit" className="btn btn-signup"> Enviar </button>

                        </form>
                    </div>
                )       
              }  



            </Mutation>
        )

    }




}


export default FormTienda;