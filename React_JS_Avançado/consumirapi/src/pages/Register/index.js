import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { get } from "lodash";

import { Container } from "../../styles/GlobalStyles.js";
import { Form } from "./styled.js";
import axios from '../../services/axios.js';
import history from '../../services/history.js';
import Loading from "../../components/Loading/index.js";


export default function Register() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 20) {
      formErrors = true;
      toast.error('Campo nome deve ter entre 3 a 20 caracteres!');
    }
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('A senha precisa ter entre 6 a 50 caracteres!');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido!');
    }

    if (formErrors) return;

    setIsLoading(true);

    try {
      await axios.post("/users/", {
        nome, password, email
      });

      toast.success('Cadastro realizado com sucesso!');
      setIsLoading(false);
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map(error => toast.error(error));
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu Nome"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </label>

        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </label>

        <button type="submit">Cira conta</button>
      </Form>
    </Container>
  );
}
