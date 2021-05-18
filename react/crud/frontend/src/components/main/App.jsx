import React from 'react'

import Routes from './Routes'
import Nav from '../templates/Nav'
import Logo from '../templates/Logo'
import Footer from '../templates/Footer'

import { BrowserRouter } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>