import React, { useRef, useState } from "react";
import type { GetStaticProps } from 'next'
import { getPrismicClient } from '../services/prismic';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";

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

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        {/*  {
          sliderResults?.results.map((item) => (
            <SwiperSlide>
              <img src={item.data.banner.url} alt={item.data.banner.alt} />
            </SwiperSlide>
          ))
        } */}

      </Swiper>

      {/*  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          sliderResults?.results.map((item) => (
            <SwiperSlide>
              <img src={item.data.banner.url} alt={item.data.banner.alt} />
            </SwiperSlide>
          ))
        }

      </Swiper> */}


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

