import React, { useRef, useState } from "react";
import Image from "next/image";

import { Slider } from "../types/slides/slides";
import type { GetStaticProps } from "next";

import { getPrismicClient } from "../services/prismic";

import { Keyboard, Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Head from "next/head";

interface SliderProps {
  sliderResults: Slider;
}

export default function Home({ sliderResults }: SliderProps) {
  return (
    <>
      <Head>
        <title>UiQ Chick!</title>
      </Head>
      <Swiper
        rewind={true}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderResults?.results.map((item) => (
          <SwiperSlide key={item.data.banner.url}>
            <Image
              priority
              layout="responsive"
              width={1900}
              height={500}
              src={item.data.banner.url}
              alt={item.data.banner.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const slider = await prismic.getByType(
    process.env.PRISMIC_API_SLIDER as string,
    {
      orderings: {
        field: "last_publication_date",
        direction: "desc",
      },
    }
  );

  const sliderResults = {
    results: slider.results,
  };

  return {
    props: {
      sliderResults,
    },
  };
};
