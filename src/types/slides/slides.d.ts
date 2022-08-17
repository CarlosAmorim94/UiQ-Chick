interface Slide {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      alt: string;
      url: string;
    }
  };
}

export interface Slider {
  results: Slide[];
}