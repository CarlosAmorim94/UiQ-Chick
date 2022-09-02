import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";
import { Post } from "../../types/post/posts";
import { getPrismicClient } from "../../services/prismic";
import { ParsedUrlQuery } from "querystring";

import {
  AddToCart,
  Container,
  Content,
  CurrentPrice,
  Description,
  DividedPrice,
  ImageStyle,
  Price,
  PriceBefore,
  ProductColors,
  ProductSize,
  Title,
} from "../../styles/pageStyles/stylesSlug";
import Image from "next/image";

type CardProps = {
  post: Post;
};

type IParams = ParsedUrlQuery & {
  slug: string;
};

export default function Slug({ post }: CardProps) {
  const parcelas: number = 10;

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <Head>
        <title>{post.data.title}</title>
      </Head>

      <Title>{post.data.title}</Title>
      <Content>
        <ImageStyle>
          <Image
            src={post.data.banner.url!}
            alt={post.data.banner.alt}
            priority
            layout="responsive"
            width={100}
            height={100}
          />
        </ImageStyle>

        <ProductColors>Colors</ProductColors>

        <ProductSize>
          <input type="radio" id="little" name="contact" value="email" />
          <label htmlFor="little">Pequeno</label>

          <input type="radio" id="middle" name="contact" value="phone" />
          <label htmlFor="middle">Médio</label>

          <input type="radio" id="big" name="contact" value="mail" />
          <label htmlFor="big">Grande</label>
        </ProductSize>

        <Price>
          <PriceBefore>
            {(post.data.price * 1.5).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </PriceBefore>
          <CurrentPrice>
            {post.data.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </CurrentPrice>
          <DividedPrice>
            Ou em ${parcelas} vezes de
            <span>
              {(post.data.price / parcelas).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            sem juros!
          </DividedPrice>
        </Price>

        <AddToCart>Comprar</AddToCart>

        <Description>
          {post.data.content?.map((item) => (
            <article key={item.heading}>
              <div
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(item.body),
                }}
              />
            </article>
          ))}
        </Description>
      </Content>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType(
    process.env.PRISMIC_API_CATEGORY_1 as string
  );

  const paths = posts.results.map((post) => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;

  const prismic = getPrismicClient({});
  const response = await prismic.getByUID(
    process.env.PRISMIC_API_CATEGORY_1 as string,
    String(slug)
  );

  return {
    props: {
      post: response,
    },
    revalidate: 1800,
  };
};
