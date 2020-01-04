import React from 'react';
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-primary">
            <div className="container">
                <a href='/'><img src="/img/favicon.ico" height="64" width="64" alt="logo"/> </a> 
                <Link to='/' className="brand-logo">TitleName</Link>
                <a class="navbar-brand" href="/">Home</a>
                <SignInLinks/>
            </div>
        </nav>
    );
}

export default Navbar