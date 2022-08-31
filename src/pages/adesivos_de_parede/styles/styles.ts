import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;
export const Content = styled.div`
  max-width: 1400px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`;
export const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-gap: 1rem;
`;

export const LoadButton = styled.button`
  width: 50%;
  height: 3rem;
  margin: 2rem auto;
  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.category_text};
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
