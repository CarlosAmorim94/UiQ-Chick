import React, { useRef, useState } from "react";
import type { GetStaticProps } from 'next'
import { getPrismicClient } from '../services/prismic';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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

interface Slider {
  results: Slide[];
}

interface HomeProps {
  sliderResults: Slider;
}

export default function Home({ sliderResults }: HomeProps) {
  return (
    <>

      <Swiper
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          sliderResults?.results.map((item) => (
            <SwiperSlide>
              <img src={item.data.banner.url} alt={item.data.banner.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>


    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});

  /* const postsResponse = await prismic.getByType(process.env.PRISMIC_API_CATEGORY_1 as string, {
    orderings: {
      field: 'last_publication_date',
      direction: 'desc',
    },
  });

  const postsPagination = {
    results: postsResponse.results, */
  const slider = await prismic.getByType(process.env.PRISMIC_API_SLIDER as string, {
    orderings: {
      field: 'last_publication_date',
      direction: 'desc',
    },
  });

  const sliderResults = {
    results: slider.results,
  };


  return {
    props: {
      sliderResults
    },
  };

};

