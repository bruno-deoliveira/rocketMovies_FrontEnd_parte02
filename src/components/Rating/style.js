import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > span {
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
