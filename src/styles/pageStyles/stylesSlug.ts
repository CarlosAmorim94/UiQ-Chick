import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 1rem auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const Content = styled.article`
  width: 100%;

  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 40% 1fr 1fr;
  grid-template-rows: repeat(4, 20%);
  grid-template-areas:
    "img pc pc"
    "img ps ps"
    "img pr ac"
    "img desc desc";
`;

export const ImageStyle = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1rem 1rem 0 0;
`;

export const ProductColors = styled.div`
  width: 100%;
  grid-area: pc;
`;

export const ProductSize = styled.form`
  grid-area: ps;
`;
export const Price = styled.div`
  grid-area: pr;
  align-self: center;
`;

export const PriceBefore = styled.p`
  text-decoration: line-through;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CurrentPrice = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DividedPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  span {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AddToCart = styled.button`
  width: 100%;
  height: 50%;
  grid-area: ac;
  align-self: center;

  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid;
  border-radius: 2rem;
  font-size: 1.2rem;
  padding: 1rem 1.2rem;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
export const Description = styled.div`
  grid-area: desc;
`;
