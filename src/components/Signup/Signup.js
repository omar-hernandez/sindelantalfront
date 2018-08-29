import React, { Component } from 'react';

import GenereicInput from '../GenericInput/GenericInput';
import services from '../../services'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellidos: '',
      correo: '',
      fecha_nacimiento: '',
      password: '',
      username: '',
      genero: 'M',
      ubicacion: 'MX',
      chek_password: ''
    };
  }

  chekInput = (event)=> {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

submitForm = (event)=>{
    event.preventDefault();
    if(this.checkPassword()){
        services.createUser(this.state).then((resp)=>{
          console.log(resp.data)
          this.props.history.push('/')
        }).catch((err)=>{
          console.log(err.response.data)
        })
    }else{
        alert("PW no coinciden")
    }
}

checkPassword = () =>{
    return this.state.password === this.state.chek_password
}

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <form role="form" onSubmit={this.submitForm}>
            <GenereicInput
              type={'email'}
              value={this.state.correo}
              name={'correo'}
              change={this.chekInput}
            />
            <GenereicInput
              type={'text'}
              value={this.state.nombe}
              name={'nombre'}
              change={this.chekInput}
            />
            <GenereicInput
              type={'text'}
              value={this.state.apellidos}
              name={'apellidos'}
              change={this.chekInput}
            />
            <GenereicInput
              type={'text'}
              value={this.state.username}
              name={'username'}
              change={this.chekInput}
            />
            <GenereicInput
              type={'password'}
              value={this.state.password}
              name={'password'}
              change={this.chekInput}
            />
            <GenereicInput
              type={'password'}
              value={this.state.chek_password}
              name={'chek_password'}
              change={this.chekInput}
            />

            <div className="from-group">
              <label>Genero</label>
              <select
                name="genero"
                id="genero"
                onChange={this.chekInput}
                value={this.state.genero}
              >
                <option value="H">Hombre</option>
                <option value="M">Mujer</option>
              </select>
            </div>

            <div className="from-group">
              <label>Ubicacion</label>
              <select
                name="ubicacion"
                id="ubicacion"
                onChange={this.ubicacion}
                value={this.state.ubicacion}
              >
                <option value="MX">México</option>
                <option value="US">USA</option>
                <option value="CA">Canadá</option>
                <option value="GT">Guatemala</option>
                <option value="BZ">Belice</option>
              </select>
            </div>
            <button type="submit" className="btn btn-signup mb-3">Enviar</button>  
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;