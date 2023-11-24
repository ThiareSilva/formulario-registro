import React from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Formulario = ({ dataFormulario, handleInputChange, handleSubmit }) => {
  return (
    <>
      <Form onSubmit={handleSubmit} className="grupo-campos">
        <input
          type="text"
          className="form-control"
          name="nombre"
          placeholder="Nombre"
          value={dataFormulario.nombre}
          onChange={handleInputChange}
        />

        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="tuemail@ejemplo.com"
          value={dataFormulario.email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Contraseña"
          value={dataFormulario.password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          className="form-control"
          name="passwordCheck"
          placeholder="Confirma tu contraseña"
          value={dataFormulario.passwordCheck}
          onChange={handleInputChange}
        />
        <Button variant="success" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
