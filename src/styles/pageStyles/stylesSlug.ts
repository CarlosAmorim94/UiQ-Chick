import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 1rem auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const Content = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: repeat(5, auto);
`;

export const ImageStyle = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1rem 1rem 0 0;

  grid-row: 1 6;
  grid-column: 1 2;
`;

export const ProductColors = styled.div``;

export const ProductSize = styled.div``;
export const Price = styled.div``;
export const AddToCart = styled.button``;
export const Description = styled.div``;
