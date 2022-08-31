import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const Content = styled.div`
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const LogoContainer = styled.div`
  max-width: 150px;
  padding: 0.5rem;
  margin: 1rem 0;
  cursor: pointer;

  img {
    border-radius: 15%;
  }
`;

export const SearchBox = styled.form`
  width: 50%;
  background-color: ${(props) => props.theme.colors.category_text};
  border-radius: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 20px;

  input {
    height: 29px;
    border: none;
    background: none;
    padding: 4px 5px;
    font-size: 1rem;
    width: 100%;

    &:focus {
      outline: 0 none;
      box-shadow: 0 0 0 transparent;
    }
  }

  button {
    background: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.primary};
    border: none;
    padding: 3px 8px;
  }
`;

export const Navbar = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-shop {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 2.5rem;
    margin-left: 2rem;
  }
`;
export const Categories = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
