import React from "react";

import "../Styles/components/pages/GaleriaPage.css";

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <h2>Galeria</h2>
            <div className="galeria">
                <img src={"../images/img1.jpg"} />
                <img src={"../images/img2.jpg"} />
                <img src={"../images/img3.jpg"} />
                <img src={"../images/img4.jpg"} />
                <img src={"../images/img5.jpg"} />
                <img src={"../images/img6.jpg"} />
                <img src={"../images/img7.jpg"} />
                <img src={"../images/img8.jpg"} />
                <img src={"../images/img9.jpg"} />
                <img src={"../images/img10.jpg"} />
            </div>
        </main>
    );
}

export default GaleriaPage;