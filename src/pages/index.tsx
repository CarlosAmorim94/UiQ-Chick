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
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  return (
    <h1>{postsPagination.results.map((item) => (
      <div key={item.uid}>{item.data.title}</div>
    ))}</h1>
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

  return {
    props: {
      postsPagination,
    },
  };
}