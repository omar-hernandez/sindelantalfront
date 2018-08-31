import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import GenericInput from "../GenericInput/GenericInput";
import FileUploader from "react-firebase-file-uploader";
import Firebase from "../../Firebase";
import payload from "../../resolvers/payload";

import './formTienda.scss';

const CREATE_TIENDA = gql`
  mutation AddTienda($data: addTiendas!) {
    addTiendas(data: $data) {
      _id
      nombre
    }
  }
`;

const GET_TIPOS = gql`
  query {
    allTipoRest {
      _id
      nombre
    }
  }
`;

class FormTienda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      // user: payload().id,
      tipo: "",
      telefono: "",
      direccion: "",
      descripcion: "",
      nivel_precio: 1
      // foto_tiendas:[]
    };
  }

  onInputChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleUploadSuccess = (filename) => {
  //     Firebase.storage().ref('images').child(filename)
  //         .getDownloadURL().then(url=> {
  //             this.setState(prevState => ({
  //                 foto_tiendas:[...prevState.foto_tiendas,url]
  //             }))
  //         })
  // }

  // handleUploadError = (error) => {
  //     console.log(error)
  // }

  checkCalendarInput = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  onCheckBoxChange = event => {
    if (event.target.checked) {
      let array = [...this.state.tipo];
      array.push(event.target.name);
      this.setState({
        tipo: array
      });
    } else {
      let array = [...this.state.tipo];
      let index = array.indexOf(event.target.name);
      console.log(this.state.tipo);
      array.splice(index, 1);
      this.setState({ tipo: array });
    }
  };

  onFormSubmit = (event, addTiendas) => {
    event.preventDefault();
    console.log(this.state);
    addTiendas({ variables: { data: this.state } });

    this.props.history.push("/");
  };

  renderQuery = () => (
    <Query query={GET_TIPOS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading ...";
        if (error) return "Error al cargar los tipos de restaurante";
        return data.allTipoRest.map(tipo => (
          <label className="form-control checkbx">
            <input
              type="checkbox"
              name={tipo._id}
              value={tipo._id}
              checked={this.state.tipo.indexOf(tipo._id) !== -1 ? true : false}
              onChange={this.onCheckBoxChange}
            />
            {tipo.nombre}
          </label>
        ));
      }}
    </Query>
  );

  render() {
    return (
      <Mutation mutation={CREATE_TIENDA}>
        {(addTiendas, { data }) => (
          <div className="row justify-content-center">
            <div className="createForm">
              <form onSubmit={e => this.onFormSubmit(e, addTiendas)}>
                <GenericInput
                  name={"nombre"}
                  type={"text"}
                  value={this.state.nombre}
                  change={this.onInputChange}
                />

                <GenericInput
                  name={"telefono"}
                  type={"number"}
                  value={this.state.telefono}
                  change={this.onInputChange}
                />

                <div className="form-group">
                  <label htmlFor="">descripcion:</label>
                  <textarea
                    cols="10"
                    rows="2"
                    className="form-control"
                    value={this.state.descripcion}
                    name="descripcion"
                    onChange={this.onInputChange}
                  />
                </div>

                <GenericInput
                  name={"direccion"}
                  type={"text"}
                  value={this.state.direccion}
                  change={this.onInputChange}
                />

                <div className="form-group">
                  <label htmlFor="">Nivel de precios</label>
                  <select
                    className="form-control"
                    value={this.state.nivel_precio}
                    name="nivel_precio"
                    onChange={this.onInputChange}
                  >
                    <option value={1}> Barato </option>
                    <option value={2}> Moderado </option>
                    <option value={3}> Caro </option>
                  </select>
                </div>

                {/* <div className="form-group">
    <label className="btn btn-danger">
        Agrega Imagenes
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
</div>                             */}

                <div className="form-group">
                  <label htmlFor=""> Tipo de Restaurante: </label>
                  {this.renderQuery()}
                </div>

                <button type="submit" className="btn btn-success float-right btnSave">
                  {" "}
                  Enviar{" "}
                </button>
              </form>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default FormTienda;
