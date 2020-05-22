import React from 'react';
import Footer from '../layout/Footer';
import Routes from '../Routes';

const Header = () => {

    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm navbar fixed-top">
                <div className="container">
                    <h5 className="my-0 mr-md-auto font-weight-normal masthead-brand"><a className="nav-link active" href="/">Company</a></h5>
                    <nav className="nav nav-masthead justify-content-center">
                        <a className="nav-link" href="#">Cursos</a>
                        <a className="nav-link" href="#">Contacto</a>
                        <a className="nav-link" href="#">Ingresar</a>
                    </nav>
                </div>
            </div>
            <div className="container" style={{marginTop:"5rem"}}>
                <Routes /> 
            </div>
            <div className="container-fluid">
                <Footer/>
            </div>
        </div>
    );

}

export default Header;