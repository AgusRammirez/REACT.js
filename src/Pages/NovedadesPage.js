import { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../Components/layout/novedades/NovedadItem";
import "../Styles/components/pages/NovedadesPage.css";
const NovedadesPage = (props) => {
   const [loading, setLoading] = useState(false);
   const [novedades, setNovedades] = useState([]);


   useEffect(()=> {
    const cargarNovedades = async () => {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/novedades");
        setNovedades(response.data);
        setLoading(false);
    };

    cargarNovedades();
   }, []);

    return (
        <section className="holder">
            <h1 className="tituloNovedad">NOVEDADES</h1>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key = {item.id}
                    title = {item.titulo} subtitle = {item.subtitulo}
                    imagen = {item.imagen} body = {item.descripcion} />)
                )
            }
        </section>
    )
};

export default NovedadesPage; 