import { GetStaticProps } from "next/types";
import { useState } from "react";
import Cards from "../../components/Cards";
import { getPrismicClient } from "../../services/prismic";
import { Post, PostPagination } from "../../types/post/posts";
import { CardsContainer, Container, Content } from "./styles/styles";

type PostsProps = {
  postsPagination: PostPagination;
};

export default function Adesivos_de_parede({ postsPagination }: PostsProps) {
  const [posts, setPosts] = useState(postsPagination.results);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);

  async function handleNextPage(): Promise<void> {
    if (nextPage === null) return;

    const postsResults = await fetch(nextPage).then((response) =>
      response.json()
    );

    setNextPage(postsResults.next_page);

    const newPosts = postsResults.results.map((post: Post) => {
      return {
        ...post,
      };
    });

    setPosts([...posts, ...newPosts]);
  }

  return (
    <Container>
      <Content>
        <CardsContainer>
          {posts.map((item) => (
            <Cards key={item.uid} item={item} />
          ))}
        </CardsContainer>

        {nextPage && (
          <button type="button" onClick={handleNextPage}>
            Carregar mais posts
          </button>
        )}
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType(
    process.env.PRISMIC_API_CATEGORY_4 as string,
    {
      pageSize: 20,
      orderings: {
        field: "last_publication_date",
        direction: "desc",
      },
    }
  );

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: postsResponse.results,
  };

  return {
    props: {
      postsPagination,
    },
  };
};