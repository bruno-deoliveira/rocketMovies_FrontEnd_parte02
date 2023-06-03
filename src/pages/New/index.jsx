import { Container, Form } from "./style";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { FiArrowLeft } from "react-icons/fi";
import { Rating } from "./../../components/Rating/index";

export function New() {
  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
            <h1> Novo filme </h1>
          </header>

          <div>
            <Input placeholder="Titulo" />

            <Input //OBS RATING
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
            />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br/" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <div>
            <Button title="Excluir filme" />
            <Button title="Salvar" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
