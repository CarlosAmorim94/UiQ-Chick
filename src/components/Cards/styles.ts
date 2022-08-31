import styled from "styled-components";

export const Container = styled.article`
  list-style: none;
  border: 1px dashed ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    transform: translateY(-5px);
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageContent = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1rem 1rem 0 0;
`;

export const ItemTitle = styled.h3`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0.5rem auto;
`;
export const ItemPrice = styled.section`
  width: 100%;
  margin: auto;
  padding: 0 1rem;
`;
export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;
export const SplitPrice = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
`;
export const FreeShipping = styled.p`
  font-size: 0.7rem;
  color: green;
  font-weight: bold;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: auto;
  margin-bottom: 1rem;
  padding: 0 1rem;

  .plus_cart {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin: auto;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ButtonDetail = styled.button`
  width: 75%;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  min-width: fit-content;
  padding: 5px 30px;
  user-select: none;
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;
