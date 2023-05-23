import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px;
  }

  main::-webkit-scrollbar {
    width: 8px;
  }

  main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  max-width: 1050px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    width: 20px;
    height: 20px;
  }
`;

export const TitleRating = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  margin-block: 24px;

  > h1 {
    font-size: 36px;
    font-weight: 500;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
