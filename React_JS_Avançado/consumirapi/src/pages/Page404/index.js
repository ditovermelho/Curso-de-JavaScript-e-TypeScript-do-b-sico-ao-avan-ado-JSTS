import React from "react";
import { Warning } from "./styled";
import { Container } from "../../styles/GlobalStyles";

export default function Page404() {
    return (
        <Container>
            <Warning>Está pagina não existe!</Warning>
        </Container>
    );
}
