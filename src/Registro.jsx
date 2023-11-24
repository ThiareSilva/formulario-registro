import React, { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Registro = () => {
  const [dataFormulario, setDataFormulario] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [mensajesValidacion, setMensajesValidacion] = useState([]);
  const [tipoErrorFormulario, setTipoErrorFormulario] = useState("danger");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataFormulario((prevData) => ({ ...prevData, [name]: value }));
  };

  const validarFormulario = () => {
    const mensajes = [];

    if (
      !dataFormulario.nombre ||
      !dataFormulario.email ||
      !dataFormulario.password ||
      !dataFormulario.passwordCheck
    ) {
      mensajes.push("¡Completa todos los campos!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dataFormulario.email)) {
      mensajes.push("Email no tiene el formato correcto.");
    }

    if (dataFormulario.password !== dataFormulario.passwordCheck) {
      mensajes.push("Las contraseñas deben coincidir.");

    }

    setTipoErrorFormulario("danger");
    setMensajesValidacion(mensajes);
    return mensajes.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
        setTipoErrorFormulario("success");
        setMensajesValidacion(["Formulario Correcto"]);
    }
  };

  return (
    <div>
      <div className="crea-cuenta">
        <h2>Crea una Cuenta</h2>
        <div className="grupo-iconos">
        <SocialButton nombreIcono={faFacebook} />
        <SocialButton nombreIcono={faGithub} />
        <SocialButton nombreIcono={faLinkedin} />
        
        </div>
        <h6>O usa tu email para registrarte</h6>
        <Formulario
          dataFormulario={dataFormulario}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>

      {mensajesValidacion.length > 0 && (
        <Alert mensajesValidacion={mensajesValidacion} tipoErrorFormulario={tipoErrorFormulario}/>
      )}
    </div>
  );
};

export default Registro;
