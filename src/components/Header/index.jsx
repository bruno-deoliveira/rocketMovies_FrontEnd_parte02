import { Container, Search, Profile, Logout } from "./style";

export function Header({ children }) {
  return (
    <Container>
      <h2>RocketMovies</h2>

      <Search>{children}</Search>

      <Profile to="/profile">
        <div>
          <strong>Bruno Oliveira</strong>
          <Logout> Sair </Logout>
        </div>

        <img
          src="https://github.com/bruno-deoliveira.png"
          alt="Foto so usuário"
        />
      </Profile>
    </Container>
  );
}
