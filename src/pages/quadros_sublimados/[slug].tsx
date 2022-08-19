import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";
import { Post } from "../../types/post/posts";
import { getPrismicClient } from "../../services/prismic";
import { ParsedUrlQuery } from "querystring";

import {} from "./styles/stylesSlug";

type CardProps = {
  post: Post;
};

type IParams = ParsedUrlQuery & {
  slug: string;
};

export default function Slug({ post }: CardProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <h2>{post.data.title}</h2>
      <h3>{post.data.price}</h3>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType(
    process.env.PRISMIC_API_CATEGORY_3 as string
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
    process.env.PRISMIC_API_CATEGORY_3 as string,
    String(slug)
  );

  return {
    props: {
      post: response,
    },
    revalidate: 1800,
  };
};
