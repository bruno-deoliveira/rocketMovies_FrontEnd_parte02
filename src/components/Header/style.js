import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 123px;

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 30px;
  }

  strong {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 90px;
  font-size: 17px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
