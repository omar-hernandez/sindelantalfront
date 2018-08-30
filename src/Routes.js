import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import {ApolloProvider} from 'react-apollo';
import DetailRestaurante from './components/DetailRestaurante/DetailRestaurante';
import FormTienda from './components/FormTienda/FormTienda'
import client from './graphql'
import RestaurantesList from './components/RestaurantesList/RestaurantesList';

class Routes extends Component{

    render(){
        return(
            <Router>
                <ApolloProvider client={client}>
                    <main>
                        <Navbar/>  
                        <Route exact path='/signup' component={Signup}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/logout' component={Logout}/>
                        <Route exact path='/restaurantes' component={RestaurantesList}/>
                        <Route exact path='/restaurante/:id' component={DetailRestaurante}/>
                        <Route exact path='/newrestaurante' component={FormTienda}/>
                    </main>
                </ApolloProvider>
                
            </Router>
        )    
    }
}

export default Routes;