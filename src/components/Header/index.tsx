import Image from "next/image";
import Link from "next/link";
import Logo2 from "/public/img/logo2.png";
import { FaShoppingBag } from "react-icons/fa";
import { GiBrickWall, GiBoxUnpacking, GiRolledCloth } from "react-icons/gi";
import { AiFillGift, AiOutlineSearch } from "react-icons/ai";
import { MdStickyNote2 } from "react-icons/md";

import Switch from "react-switch";

import {
  Categories,
  Container,
  Content,
  Info,
  LogoContainer,
  Navbar,
  SearchBox,
} from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Category } from "../Category";

type Props = {
  toggleTheme(): void;
};

export const Header = ({ toggleTheme }: Props) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <Info>
          <Link href="/">
            <a>
              <LogoContainer>
                <Image
                  src={Logo2}
                  alt="Logotipo roxo com o titulo da empresa UiQ Chick"
                />
              </LogoContainer>
            </a>
          </Link>

          <SearchBox>
            <input type="text" placeholder="Buscar..." />
            <button type="submit">
              <AiOutlineSearch />
            </button>
          </SearchBox>

          <Navbar>
            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={25}
              height={10}
              width={40}
              offColor="#a1a1a1"
              onColor="#f1f1f1"
            />

            <FaShoppingBag className="cart-shop" />
          </Navbar>
        </Info>

        <Categories>
          <Category
            name="Adesivos de parede"
            icon={<GiBrickWall />}
            url="adesivos_de_parede"
          />
          <Category
            name="Quadros adesivados"
            icon={<MdStickyNote2 />}
            url="quadros_adesivados"
          />
          <Category
            name="Quadros em tecido sublimado"
            icon={<GiRolledCloth />}
            url="quadros_sublimados"
          />
          <Category
            name="Embalagens criativas"
            icon={<GiBoxUnpacking />}
            url="embalagens_criativas"
          />
          <Category
            name="Presentes criativos"
            icon={<AiFillGift />}
            url="presentes_criativos"
          />
        </Categories>
      </Content>
    </Container>
  );
};
