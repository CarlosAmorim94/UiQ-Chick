import type { GetStaticProps } from 'next'
import { getPrismicClient } from '../services/prismic';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    author: string;
  };
}

interface PostPagination {
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
  postsPagination2: PostPagination;
}

export default function Home({ postsPagination, postsPagination2 }: HomeProps) {
  return (
    <>
      <ul>{postsPagination?.results.map((item) => (
        <li key={item.uid}>{item.data.title}</li>
      ))}</ul>
      <ul>{postsPagination2?.results.map((item) => (
        <li key={item.uid}>{item.data.title}</li>
      ))}</ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType(process.env.PRISMIC_API_CATEGORY_1 as string, {
    orderings: {
      field: 'last_publication_date',
      direction: 'desc',
    },
  });

  const postsPagination = {
    results: postsResponse.results,
  };

  const postsResponse2 = await prismic.getByType(process.env.PRISMIC_API_CATEGORY_2 as string, {
    orderings: {
      field: 'last_publication_date',
      direction: 'desc',
    },
  });

  const postsPagination2 = {
    results: postsResponse2.results,
  };


  return {
    props: {
      postsPagination,
      postsPagination2
    },
  };
}