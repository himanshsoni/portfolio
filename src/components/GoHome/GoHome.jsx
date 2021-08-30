import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import homeIconWhite from './../../assets/home_white.png'
import homeIconBlack from './../../assets/home_black.png'
import  './GoHome.css'

class GoHome extends Component {
    goToHome = () =>{
        const {history } =this.props
        // console.log(history);
        history.push('/')
    }
    render() {
        const {location}=this.props
        const whiteBtn=location.pathname==='/'
        return (
            <button onClick={this.goToHome} className={`home-btn ${whiteBtn ?'white-bg':'gradient-bg' }`}>
                <img className='home-icon' src={whiteBtn?homeIconBlack:homeIconWhite} alt="home-icon" />
            </button>
        )
    }
}
export default withRouter(GoHome)
