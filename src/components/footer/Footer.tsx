import { useEffect, useState } from "react";
import s from "./Footer.module.css";

export const Footer = () => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsPhone(true);
      } else {
        setIsPhone(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.contacts}>
        <div className={s.qr}>
          <img src="/img/qr.svg" alt="" />
        </div>
        {!isPhone ? (
          <div className={s.contacts__text}>
            <p>
              Delta Alpha Omega DAO LLC
              <br /> 1531 Bellaire St, Denver, CO, 80220, USA
            </p>
            <p>email@companydao.org</p>
            <p>
              Telegram, WhatsApp: <span>+1 307 217-3127</span>
            </p>
          </div>
        ) : (
          <div className={s.contacts__mobile}>
            <p>
              Telegram, WhatsApp: <span>+1 307 217-3127</span>
            </p>
            <p>Send an email: <span>email@companydao.org</span></p>
            <p>
              Delta Alpha Omega DAO LLC
              <br /> 1531 Bellaire St, Denver, CO, 80220, USA
            </p>
          </div>
        )}
      </div>
      <div className={s.links}>
        <p>
          <a href="">More</a>
        </p>
        <p>
          <a href="">Legal Opinion</a>
        </p>
        <p>
          <a href="">Docs</a>
        </p>
        <p className={s.terms}>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};
