import s from "./HeaderContent.module.css";



interface headerContentButtonRef {
  forwardedRef: React.RefObject<HTMLAnchorElement>;
}


export const HeaderContent : React.FC<headerContentButtonRef>  = ({ forwardedRef }) => {


  
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.title}>
          <p>Tokenize any business or asset</p>
        </div>
        <div className={s.text}>
          Access capital, unlock liquidity, enable fractional ownership and grow
          your business with token incentives
        </div>
        <div className={s.buttons}>
          <div className={s.button}>
            <a target="_blank"  href="https://calendly.com/companydao/intro">
              <span>Book a Demo</span>
              <span>
                <img src="/img/calendar.svg" alt="" />
              </span>
            </a>
          </div>
          <div className={`${s.button} ${s.button__white}`}>
            <a ref={forwardedRef} href="https://app.companydao.org/">
              <span>Enter App</span>
              <span >
                <img src="/img/arrow-right.svg" alt="" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
