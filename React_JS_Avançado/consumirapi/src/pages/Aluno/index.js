import React, { useState, useEffect } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { isEmail, isFloat, isInt } from "validator";

import { Container } from "../../styles/GlobalStyles.js";
import { Form } from "./styled.js";
import Loading from "../../components/Loading/index.js";
import axios from "../../services/axios";
import history from "../../services/history.js";

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, "Fotos[0].url", "");

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setAltura(data.altura);
        setIdade(data.idade);
        setPeso(data.peso);

        setIsLoading(false);
      } catch (err) {
        const status = get(err => 'response.status', 0);
        const errors = get(err => "response.data.errors", []);

        if (status === 400) errors.map(error => toast.error(error));

        setIsLoading(false);

        history.push('/');
      }
    }

    getData();
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 20) {
      formErrors = true;
      toast.error('Campo nome deve ter entre 3 a 20 caracteres!');
    }

    if (sobrenome.length < 3 || sobrenome.length > 20) {
      formErrors = true;
      toast.error('Campo sobrenome deve ter entre 3 a 20 caracteres!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido!');
    }

    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error('Idade inválida');
    }

    if (!isFloat(String(altura))) {
      formErrors = true;
      toast.error('Altura inválida');
    }

    if (!isFloat(String(peso))) {
      formErrors = true;
      toast.error('Peso inválida');
    }

    if (formErrors) return;
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? "Editar Aluno" : "Novo Aluno"}</h1>

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

        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            type="text"
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
            placeholder="Digite seu Sobrenome"
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

        <label htmlFor="idade">
          Idade:
          <input
            type="text"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            placeholder="Digite seu Idade"
          />
        </label>

        <label htmlFor="altura">
          Altura:
          <input
            type="text"
            value={altura}
            onChange={e => setAltura(e.target.value)}
            placeholder="Digite seu Altura"
          />
        </label>

        <label htmlFor="peso">
          Peso:
          <input
            type="text"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            placeholder="Digite seu Peso"
          />
        </label>

        <button>Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
}
