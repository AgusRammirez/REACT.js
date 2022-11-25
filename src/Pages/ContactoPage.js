import React from "react";
import "../Styles/components/pages/ContactoPage.css";
import { useState } from "react";
import axios from "axios";

const ContactoPage = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto</h2>
        <form
          action="/contacto"
          method="post"
          className="formulario"
          onSubmit={handleSumbit}
        >
          <p>
            <label for="nombe">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </p>
          <p>
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </p>

          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
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
};

export default ContactoPage;
