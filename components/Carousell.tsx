import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Carousell.module.css";
/*  className: "center",
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "0",
  variableWidth: true,*/
var settings = {
  centerMode: true,
  centerPadding: "0",
  variableWidth: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Carousell = () => {
  return (
    <div>
      <Slider {...settings}>
        <Card img="/chill.jpg" emoji="😴" />
        <Card img="/coffee.jpg" emoji="☕" />
        <Card img="/drinks.jpg" emoji="🍻" />
        <Card img="/party.jpg" emoji="🪩" />
      </Slider>
    </div>
  );
};

const Card = ({ img, emoji }: { img: string; emoji: string }) => {
  return (
    <div className={styles.card}>
      <Image src={img} layout="fill" alt={emoji} priority />
      <div className={styles.emoji}>{emoji}</div>
    </div>
  );
};

export default Carousell;
