import styled from "styled-components";

export const Container = styled.li`
  list-style: none;
  width: 20%;
  height: 100%;
  padding: 0.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.category_text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :first-child {
    border-left: 1px solid ${({ theme }) => theme.colors.category_text};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.category_text};
`;

export const Name = styled.div`
  width: 90%;

  flex-wrap: wrap;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.category_text};
`;
