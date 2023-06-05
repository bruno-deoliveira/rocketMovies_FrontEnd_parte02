import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, Links, Content, TitleRating, AuthorInfo } from "./style";

import { FiClock, FiArrowLeft } from "react-icons/fi";

//import { format } from "date-fns";
//import ptBR from "date-fns/esm/locale/pt-BR/index.js";

import moment from "moment-timezone";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Input } from "../../components/Input";

export function Details() {
  const [data, setData] = useState({});
  
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);
  
  const { user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const formattedDate = moment
    .utc(data.updated_at)
    .tz("America/Sao_Paulo")
    .format("DD/MM/YYYY HH:mm:ss");  

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>
      {data && (
        <main>
          <Content>
            <div className="buttonText">
              <ButtonText
                title="Voltar"
                icon={FiArrowLeft}
                onClick={handleBack}
              />
              <ButtonText
                title="Excluir filme"
                onClick={handleRemove}
                isActive
              />
            </div>

            <TitleRating>
              <h1> {data.title} </h1>
              <Rating rating={data.rating} />
            </TitleRating>

            <AuthorInfo>
              <div>
                <img src={avatarUrl} alt={user.name} />
                <span>{user.name}</span>
              </div>

              <div>
                <FiClock />
                <span>{formattedDate}</span>
              </div>
            </AuthorInfo>

            {data.tags && (
              <Section title="">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <p>{data.description}</p>

            {data.links && (
              <Section title="Onde assistir">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
          </Content>
        </main>
      )}
    </Container>
  );
}
