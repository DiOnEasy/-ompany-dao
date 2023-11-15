import s from './HeaderNav.module.css';




export const HeaderNav = () => {
    return (
      
        <div className={s.wrapper}>
          <div className={s.logo}>
            <p>Company</p>
            <img src="/img/logo.svg" alt="" />
          </div>
          <div className={s.navbar}>
            <a href=""><img src="/img/youtube.svg" alt="" />Watch Demo</a>
            <a href="">Telegram</a>
            <a href="">Twitter</a>
            <a href="">Medium</a>
            <a href="">Get in touch</a>
            <a href="">Enter App <img src="/img/small-arrow-right.svg" alt="" /></a>
          </div>
        </div>
      
    );
  };
  