import React from "react";

import "../Styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombe">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="celular">Celular</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>

                    <input type="button" value="Enviar" />
                </form>
            </div>
            <div className="socialMedia">
                <section className="buttonSocial">
                    <a href="#" class="bi bi-whatsapp"></a>
                    <a href="#" class="bi bi-twitter"></a>
                    <a href="#" class="bi bi-instagram"></a>
                    <a href="#" class="bi bi-youtube"></a>
                    <a href="#" class="bi bi-tiktok"></a>
                </section>
            </div>
        </main>
    );
}

export default ContactoPage;