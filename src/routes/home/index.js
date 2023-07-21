import style from "./style.module.css";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const img1_ref = useRef(null);
  const img2_ref = useRef(null);
  useEffect(() => {
    const img1 = img1_ref.current;
    const img2 = img2_ref.current;
    const vh = window.innerHeight;
    const contentPX = vh * 1.8;
    const img2PX = vh * 0.6;
    const img1PX = vh * 0.2;

    function handleScroll() {
      requestAnimationFrame(() =>
        parallaxScroll(img1, img2, contentPX, img1PX, img2PX)
      );
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function parallaxScroll(img1, img2, contentPX, img1PX, img2PX) {
    //获取滚动距离
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    // 计算位置，并设置样式
    img1.style.top =
      window.innerWidth > 768
        ? `${200 - (scrolled / contentPX) * (200 + img1PX)}px`
        : `${60 - (scrolled / contentPX) * (60 + img1PX)}px`;

    img2.style.top =
      window.innerWidth > 768
        ? `${240 - (scrolled / contentPX) * (240 + img2PX)}px`
        : `${100 - (scrolled / contentPX) * (100 + img2PX)}px`;
  }
  return (
    <div class={style.home}>
      <section class={style.section1}>
        <div class={style.imgs}>
          <div class={`${style.img} ${style.img1}`} ref={img1_ref}></div>
          <div class={`${style.img} ${style.img2}`} ref={img2_ref}></div>
          <div class={`${style.img} ${style.img3}`}></div>
        </div>
        <div class={style.text}>
          <img src="../../assets/icon/home/xreal.svg" alt="Xreal Logo" />
        </div>
      </section>
      <section class={style.section2}></section>
    </div>
  );
}
