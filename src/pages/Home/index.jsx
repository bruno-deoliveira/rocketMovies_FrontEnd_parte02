import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, NewMovie, Content } from "./style";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Notes } from "../../components/Notes";
import { Input } from "../../components/Input";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();


  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNote();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
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
          {notes.map((note) => (
            <Notes
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>
      </main>
    </Container>
  );
}
