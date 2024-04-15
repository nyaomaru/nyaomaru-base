import Image from 'next/legacy/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Tweet } from '@/components/molecules/Tweet';
import { twitterList } from '@/domain/top/twitter';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

export const TwitterList: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="mySwiper flex"
    >
      {twitterList.map(({ no, url, logo, userIcon, tweet, tweetImages }) => (
        <SwiperSlide key={no} className="mb-4">
          <div className="tweet-card w-full p-[22px] md:w-[320px]" data-testid="tweet-card">
            <div className="twitter-logo text-center">
              <Image
                loader={({ src }) => {
                  return src + '?w=28';
                }}
                className="image-with-alt image-twitter"
                src={logo}
                width={28}
                height={27}
                alt="twitter logo"
              />
            </div>
            <div className="user-container flex items-center">
              <div className="user-icon mr-4">
                <Image
                  loader={({ src }) => {
                    return src + '?w=70';
                  }}
                  className="image-with-alt"
                  src={userIcon}
                  width={70}
                  height={70}
                  alt="user icon"
                />
              </div>
              <div className="user-info">
                <h3 className="username text-[14px] text-primary-light">nyaomaru😺</h3>
                <p className="user-id text-[14px] text-primary-light">@nyaomaru</p>
              </div>
            </div>
            <Tweet tweet={tweet} url={url} tweetImages={tweetImages}></Tweet>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
