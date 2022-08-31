import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaShoppingBag } from "react-icons/fa";
import { Post } from "../../types/post/posts";
import {
  ButtonDetail,
  Buttons,
  Container,
  FreeShipping,
  ImageContent,
  ItemPrice,
  ItemTitle,
  Price,
  SplitPrice,
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
      <ImageContent>
        <Image
          src={item.data.banner.url!}
          alt={item.data.banner.alt}
          priority
          layout="responsive"
          width={100}
          height={100}
        />
      </ImageContent>

      <ItemTitle>{item.data.title}</ItemTitle>

      <ItemPrice>
        <Price>
          {item.data.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
        <SplitPrice>
          ou em 10x de{" "}
          {(item.data.price / 10).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          sem juros
        </SplitPrice>
        <FreeShipping>Frete grátis</FreeShipping>
      </ItemPrice>

      <Buttons>
        <Link href={`${baseUrl}/${item.uid}`}>
          <ButtonDetail>Mais detalhes</ButtonDetail>
        </Link>

        <FaShoppingBag className="plus_cart" onClick={() => {}} />
      </Buttons>
    </Container>
  );
}
