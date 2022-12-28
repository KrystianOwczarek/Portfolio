import React from 'react'
import './style.css'
import {Component } from "react"

class Portfolio extends Component {

    Navigation() {
        return(
            <nav>
                <div className='navElement'>About</div>
                <div className='navElement'>Skills</div>
                <div className='navElement'>Experience</div>
                <div className='navElement'>Contact</div>
            </nav>
        )
    }

    render() {
        return(
            <div>
                <header>
                    <p>Krystian<strong>Owczarek</strong></p>
                    {this.Navigation()}
                </header>
            </div>
        )
    }
}

export default Portfolio