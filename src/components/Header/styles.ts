import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`
export const Content = styled.div`
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  max-width: 150px;
  padding: .5rem;
  margin: 1rem 0;
  cursor: pointer;

  img {
    border-radius: 15%;
  }

`

export const Navbar = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-shop {
    color: ${props => props.theme.colors.secondary};
    font-size: 2.5rem;
    margin-left: 2rem;
  }
`
export const Categories = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`