import React from "react";
import { useDispatch } from "react-redux";
import { Title, Paragrafo } from "./styled.js";
import { Container } from "../../styles/GlobalStyles.js"
import * as exampleActions from "../../store/modules/example/actions.js";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clickButtonRequest());
  }

  return (
    <Container>
      <Title>Login
        <small>oie</small>
      </Title>
      <Paragrafo>
        Lorem ipsum dolor sit amet.
      </Paragrafo>
      <button type="button" onClick={handleClick}>Enviar</button>
    </Container>
  );
}
