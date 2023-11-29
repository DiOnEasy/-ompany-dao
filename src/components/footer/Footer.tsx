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
          <img src="/img/qr.png" alt="" />
        </div>
        {!isPhone ? (
          <div className={s.contacts__text}>
            <p className={s.address}>
              Delta Alpha Omega DAO LLC
              <br /> 1531 Bellaire St, Denver, CO, 80220, USA
            </p>
            <p className={s.email}><a href="">email@companydao.org</a></p>
            <p className={s.phone__number}>
              Telegram, WhatsApp: <span>+1 307 217-3127</span>
            </p>
          </div>
        ) : (
          <div className={s.contacts__mobile}>
            <p className={s.phone__number}>
              Telegram, WhatsApp: <span>+1 307 217-3127</span>
            </p>
            <p className={s.email}>Send an email: <span><a href="mailto:email@companydao.org">email@companydao.org</a></span></p>
            <p className={s.address}>
              Delta Alpha Omega DAO LLC
              <br /> 1531 Bellaire St, Denver, CO, 80220, USA
            </p>
          </div>
        )}
      </div>
      <div className={s.links}>
        {!isPhone && <p>
          <a >More</a>
        </p>}
        
        <p>
          <a target="_blank"  href="https://companydao.org/WY%20DAO%20Memorandum%20for%20Website%20on%20HB%20Letterhead%20(2.15.2023).pdf">Legal Opinion</a>
        </p>
        <p>
          <a target="_blank"  href="https://doc.companydao.org/company-as-a-service/introduction/what-is-company-dao">Docs</a>
        </p>
        <p className={s.terms}>
          <a target="_blank"  href="https://doc.companydao.org/company-as-a-service/legal-docs/terms-of-service">Terms of Service</a>
          <a target="_blank"  href="https://doc.companydao.org/company-as-a-service/legal-docs/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};
