import React from "react";

import "../Styles/components/pages/ServiciosPage.css";

const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="./img/mantenimiento.jpg" alt=""/>
            <div className="info">
                <h4>Mantenimiento de jardines.</h4>
                <hr/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis deleniti dolore eum? Ducimus deleniti aliquid cupiditate impedit fugit, accusamus doloremque incidunt labore quam minima, deserunt delectus. Amet veniam et qui.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="./img/arreglosflorales.jpg" alt=""/>
            <div className="info">
                <h4>Arreglos florales.</h4>
                <hr/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis deleniti dolore eum? Ducimus deleniti aliquid cupiditate impedit fugit, accusamus doloremque incidunt labore quam minima, deserunt delectus. Amet veniam et qui.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="./img/aceites.jpg" alt=""/>
            <div className="info">
                <h4>Aceites esenciales</h4>
                <hr/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis deleniti dolore eum? Ducimus deleniti aliquid cupiditate impedit fugit, accusamus doloremque incidunt labore quam minima, deserunt delectus. Amet veniam et qui.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="./img/complementos.jpg" alt=""/>
            <div className="info">
                <h4>Complementos alimenticios.</h4>
                <hr/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis deleniti dolore eum? Ducimus deleniti aliquid cupiditate impedit fugit, accusamus doloremque incidunt labore quam minima, deserunt delectus. Amet veniam et qui.</p>
            </div>
        </div>
    </main>
    );
}

export default ServiciosPage;