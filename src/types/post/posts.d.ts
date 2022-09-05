export interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    author: string;
    banner: {
      url?: string;
      alt: string;
    };
    price: {
      price: number;
      size: string;
    }[];
    description: string;
  };
}

export interface PostPagination {
  next_page: string;
  results: Post[];
}
