import {useAuth} from "../../hooks/auth"
import { useNavigate } from "react-router-dom";
import { Container, Search, Profile, Logout } from "./style";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ children }) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Search>{children}</Search>

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}> Sair </Logout>
        </div>

        <img src={avatarUrl} alt={user.name} />
      </Profile>
    </Container>
  );
}

