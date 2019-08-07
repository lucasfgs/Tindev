import React, { useState } from "react";

import api from "../../services/api";
import "./style.css";
import logo from "../../assets/logo.svg";

const Login = ({ history }) => {
  const [user, setUser] = useState("");

  const handleInputValues = e => {
    setUser(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post("/devs", {
      username: user
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          placeholder="Digite o seu usuário do GitHub"
          onChange={handleInputValues}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Login;
