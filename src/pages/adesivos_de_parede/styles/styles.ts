import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;
export const Content = styled.div`
  max-width: 1400px;
  margin: 1rem auto;
`;
export const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-gap: 1rem;
`;
