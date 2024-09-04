import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles.js";
import { Form } from "./styled.js";
import Loading from "../../components/Loading/index.js";
import * as actions from "../../store/modules/auth/actions.js";


export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStrored = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.user.isLoading);

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStrored);
    // eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 20) {
      formErrors = true;
      toast.error('Campo nome deve ter entre 3 a 20 caracteres!');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('A senha precisa ter entre 6 a 50 caracteres!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido!');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? "Editar dados" : "Crie sua conta"}</h1>
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

        <button type="submit">{id ? "Atualizar" : "Cira conta"}</button>
      </Form>
    </Container>
  );
}
