import React, {Component} from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Footer from '../Footer/Footer'


class Home extends Component{

    render(){
        return(
                <div className="container-fluid">
                    <Jumbotron/>
                    <Footer/>
                </div>
        )
    }
}

export default Home
