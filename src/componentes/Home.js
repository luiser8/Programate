import React from 'react';
import Presentacion from './Presentacion';

const Home = () => {

    return (
        <div style={{marginTop:"160px"}}>
            <div className="p-md-3 text-black rounded bg-white" style={{marginBottom:"160px"}}>
                <div className="col-md-6 px-0 d-inline-block text-center">
                    <h1 className="text-center display-4 font-italic">Programar es el futuro</h1>
                    <p className="lead my-3">Escuela Web es un centro de formación con Clases presenciales y en línea Contamos con más de xx alumnos egresados</p>
                    <a href="/cursos" className="lead my-3">Explorar cursos</a>
                </div>
            </div>
            <Presentacion/>
        </div>
    );
}

export default Home;