import React from "react";

import "../Styles/components/pages/HomePage.css";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img src="./img/home.jpg" width="100%" alt="cultivo" />
            </div>
            <div className="columnasHome">
                <section className="home">
                    <h2>Bienvenidos!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, officia velit labore minus at quisquam! Cupiditate, necessitatibus cum quo et aspernatur harum eveniet non, asperiores rerum fuga doloribus labore nostrum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, officia velit labore minus at quisquam! Cupiditate, necessitatibus cum quo et aspernatur harum eveniet non, asperiores rerum fuga doloribus labore nostrum!</p>
                </section>
                <section className="home section2">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, officia velit labore minus at quisquam! Cupiditate, necessitatibus cum quo et aspernatur harum eveniet non, asperiores rerum fuga doloribus labore nostrum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, officia velit labore minus at quisquam! Cupiditate, necessitatibus cum quo et aspernatur harum eveniet non, asperiores rerum fuga doloribus labore nostrum!</p>
                </section>
            </div>
            <section>
                <h2>Testimonios clientes</h2>
                <div className="testimonios">
                    <div className="testimonio">
                        <span><img src="./img/comillas.png" width="20%" alt="" /></span>
                        <span className="cita">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates cum dicta quia, soluta aliquid earum!</span>
                        <span className="autor">Sonia Lopez - ayurveda.com</span>
                    </div>
                    <div className="testimonio">
                        <span><img src="./img/comillas.png" width="20%" alt="" /></span>
                        <span className="cita">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates cum dicta quia, soluta aliquid earum!</span>
                        <span className="autor">Bernardo Gonzalez - sanamente.com</span>
                    </div>
                    <div className="testimonio">
                        <span><img src="./img/comillas.png" width="20%" alt="" /></span>
                        <span className="cita">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates cum dicta quia, soluta aliquid earum!</span>
                        <span className="autor">Petuñia Gomez - floreria.com</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;