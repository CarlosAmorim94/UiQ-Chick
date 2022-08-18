export interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    author: string;
    price: number;
    banner: {
      url?: string;
      alt: string;
    }
  };
}

export interface PostPagination {
  next_page: string;
  results: Post[];
}