import { Container, NewMovie, Content } from "./style";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Notes } from "../../components/Notes";
import { Input } from "../../components/Input";

export function Home() {
  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>

      <main>
        <header>
          <h1> Meus filmes</h1>

          <NewMovie to="/new">
            <FiPlus />
            Adicionar Filme
          </NewMovie>
        </header>

        <Content>
          <Notes
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
              tags: [
                { id: "1", name: "drama" },
                { id: "2", name: "Ficção Cientifica" },
                { id: "3", name: "Familia" },
              ],
            }}
          />

          <Notes
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
              tags: [
                { id: "1", name: "drama" },
                { id: "2", name: "Ficção Cientifica" },
                { id: "3", name: "Familia" },
              ],
            }}
          />
        </Content>
      </main>
    </Container>
  );
}
