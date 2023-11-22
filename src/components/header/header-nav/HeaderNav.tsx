import { useEffect, useState } from "react";
import s from "./HeaderNav.module.css";

export const HeaderNav = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    };
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className={s.header}>
    <div className={s.wrapper}>
      <div className={s.logo}>
        <p>Company</p>
        <img src="/img/logo.svg" alt="" />
      </div>
      <div className={s.navbar}>
        {!isTablet && (
          <>
            <a href="">
              <img src="/img/youtube.svg" alt="" />
              Watch Demo
            </a>
            <a href="">Telegram</a>
            <a href="">Twitter</a>
            <a href="">Medium</a>
            <a href="">Get in touch</a>
          </>
        )}

        <a className={s.navbar__button} href="https://app.companydao.org/">
          Enter App <img src="/img/small-arrow-right.svg" alt="" />
        </a>
        {isTablet && (
          <>
            <div
              onClick={() => setMobileMenu(!mobileMenu)}
              className={s.burger}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              className={`${s.mobile__menu} ${
                mobileMenu == true ? s.active : ""
              }`}
            >
              <a onClick={() => setMobileMenu(!mobileMenu)} href="">
                <img src="/img/youtube.svg" alt="" />
                Watch Demo
              </a>
              <a onClick={() => setMobileMenu(!mobileMenu)} href="">
                Telegram
              </a>
              <a onClick={() => setMobileMenu(!mobileMenu)} href="">
                Twitter
              </a>
              <a onClick={() => setMobileMenu(!mobileMenu)} href="">
                Medium
              </a>
              <a onClick={() => setMobileMenu(!mobileMenu)} href="">
                Get in touch
              </a>
            </div>
          </>
        )}
      </div>
    </div>

    // </div>
  );
};
