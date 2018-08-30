import React, { Component } from 'react';
import './login.scss';
import GenericInput from '../GenericInput/GenericInput';
import services from '../../services';

class Login extends Component{

    constructor(props){
       super(props)
        this.state = {
            username:"",
            password:""
        }
    }


    chekInput = (event)=> {
        let { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
      }

    formSubmit = (e)=>{
        e.preventDefault();
        services.loginUser(this.state).then((resp)=>{
            localStorage.setItem('token',resp.data.token);
            this.props.history.push('/');
        }).catch((err)=>{
            console.log(err.response.data)
        });
        console.log(this.state);
    }


    render(){
        return(
            <div className="row d-flex flex-row justify-content-center align-items-center login-form">
                    <form action="" onSubmit={this.formSubmit}>
                        <GenericInput type={"text"} name={"username"} value={this.state.username} change={this.chekInput} />

                        <GenericInput type={"password"} name={"password"} value={this.state.password} change={this.chekInput} />

                        <div className="text-center">
                            <button type="submit" className="btn btn-success btn-lg btn-block">Empezar</button>
                        </div>    
                    </form>
                </div>
        )
    }


}

export default Login