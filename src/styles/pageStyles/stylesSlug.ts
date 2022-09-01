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
`;

export const ImageStyle = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1rem 1rem 0 0;
`;
