import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 10px 0 30px 0;
    line-height: -10px;
    overflow: hidden;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;
