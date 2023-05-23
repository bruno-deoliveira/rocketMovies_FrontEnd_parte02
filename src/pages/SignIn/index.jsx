import { Container, Form, Background } from "./style";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" Type="text" icon={FiMail} />

        <Input placeholder="Senha" Type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
