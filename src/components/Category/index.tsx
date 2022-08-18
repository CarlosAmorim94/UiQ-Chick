import Link from "next/link"
import { IconBaseProps } from "react-icons/lib"
import { Container, Icon, Name } from "./styles"

type Props = IntrinsicAttributes & {
  name: string,
  icon: IconBaseProps,
  url: string
}

export const Category = ({ name, icon, url }: Props) => {
  return (
    <Link href="/about">
      <Container>
        <Icon>
          {icon}
        </Icon>

        <Link href={`/${url}`}>
          link
        </Link>

        <Name>
          {name}
        </Name>
      </Container>
    </Link>
  )
}