import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsBagPlusFill } from "react-icons/bs";
import { Post } from "../../types/post/posts";
import {
  ButtonDetail,
  Buttons,
  Container,
  ItemPrice,
  ItemTitle,
} from "./styles";

type Props = IntrinsicAttributes & {
  key: string;
  item: Post;
};

export default function Cards({ item }: Props) {
  const router = useRouter();
  const baseUrl = router.pathname;

  return (
    <Container>
      <Image
        src={item.data.banner.url!}
        alt={item.data.banner.alt}
        priority
        layout="responsive"
        width={100}
        height={100}
      />

      <ItemPrice>
        <div className="price">{item.data.price}</div>
        <div className="split-price">
          ou em 10x de {item.data.price / 10} sem juros
        </div>
        <div className="free-shipping">Frete grátis</div>
      </ItemPrice>

      <ItemTitle>{item.data.title}</ItemTitle>

      <Buttons>
        <Link href={`${baseUrl}/${item.uid}`}>
          <ButtonDetail>Mais detalhes</ButtonDetail>
        </Link>

        <BsBagPlusFill className="plus_cart" onClick={() => {}} />
      </Buttons>
    </Container>
  );
}
