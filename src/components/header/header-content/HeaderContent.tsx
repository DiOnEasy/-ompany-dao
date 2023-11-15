import s from './HeaderContent.module.css';


export const HeaderContent = () => {
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
        <div className={s.button}>
          <a href="">
            <span>Enter App</span>
            <span><img src="/img/arrow-right.svg" alt="" /></span>
          </a>
        </div>
      </div>
    </>
  );
};
