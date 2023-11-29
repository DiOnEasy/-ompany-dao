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
      <a href="/" className={s.logo}>
       
        <img src="/img/logo.svg" alt="" />
      </a>
      <div className={s.navbar}>
        {!isTablet && (
          <>
            <a target="_blank" href="https://www.youtube.com/@CompanyDAO">
              <img src="/img/youtube.svg" alt="" />
              Watch Demo
            </a>
            <a target="_blank" href="https://t.me/company_dao">Telegram</a>
            <a target="_blank" href="https://twitter.com/company_dao">Twitter</a>
            <a target="_blank" href="https://medium.com/@CompanyDAO">Medium</a>
            <a target="_blank" href="https://calendly.com/companydao/intro">Get in touch</a>
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
              <a target="_blank" onClick={() => setMobileMenu(!mobileMenu)} href="https://www.youtube.com/@CompanyDAO">
                <img src="/img/youtube.svg" alt="" />
                Watch Demo
              </a>
              <a target="_blank" onClick={() => setMobileMenu(!mobileMenu)} href="https://t.me/company_dao">
                Telegram
              </a>
              <a target="_blank" onClick={() => setMobileMenu(!mobileMenu)} href="https://twitter.com/company_dao">
                Twitter
              </a>
              <a target="_blank" onClick={() => setMobileMenu(!mobileMenu)} href="https://medium.com/@CompanyDAO">
                Medium
              </a>
              <a target="_blank" onClick={() => setMobileMenu(!mobileMenu)} href="https://calendly.com/companydao/intro">
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
