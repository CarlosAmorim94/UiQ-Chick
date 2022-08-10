import Link from "next/link"
import { IconBaseProps } from "react-icons/lib"
import { Container, Icon, Name } from "./styles"

type Props = {
  name: string,
  icon: IconBaseProps
}

export const Category = ({ name, icon }: Props) => {
  return (
    <Link href="/about">
      <Container>
        <Icon>
          {icon}
        </Icon>

        <Name>
          {name}
        </Name>
      </Container>
    </Link>
  )
}