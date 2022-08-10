import Image from "next/image"
import Link from "next/link"
import Logo2 from '/public/img/Logo2.png'
import { FaShoppingBag } from 'react-icons/fa'
import { GiBrickWall, GiBoxUnpacking, GiRolledCloth } from 'react-icons/gi'
import { AiFillGift } from 'react-icons/ai'
import { MdStickyNote2 } from 'react-icons/md'


import Switch from 'react-switch'

import { Categories, Container, Content, Info, LogoContainer, Navbar } from "./styles"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Category } from "../Category"

type Props = {
  toggleTheme(): void
}

export const Header = ({ toggleTheme }: Props) => {

  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <Content>

        <Info>
          <Link href="/">
            <a>
              <LogoContainer>
                <Image src={Logo2} alt="Logotipo roxo com o titulo da empresa UiQ Chick" />
              </LogoContainer>
            </a>
          </Link>

          <Navbar>
            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={25}
              height={10}
              width={40}
              offColor="#a1a1a1"
              onColor="#f1f1f1"
            />

            <FaShoppingBag className='cart-shop' />

          </Navbar>
        </Info>

        <Categories>
          <Category name="Adesivos de parede" icon={<GiBrickWall />} />
          <Category name="Quadros adesivados" icon={<MdStickyNote2 />} />
          <Category name="Quadros em tecido sublimado" icon={<GiRolledCloth />} />
          <Category name="Embalagens criativas" icon={<GiBoxUnpacking />} />
          <Category name="Presentes criativos" icon={<AiFillGift />} />
        </Categories>

      </Content>


    </Container>
  )
}