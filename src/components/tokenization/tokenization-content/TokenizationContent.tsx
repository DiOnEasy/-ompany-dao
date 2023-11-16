import { FC } from "react";
import { Button } from "../../../ui/button/Button";
import { ITokenization } from "../tokenization.data";
import s from "./TokenizationContent.module.css";
export const TokenizationContent: FC<ITokenization> = ({
  image,
  titles,
  texts,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.image}>
          <img src={image} alt="" />
        </div>
        <div className={s.text}>
            {titles.map((title, index) => (
          <div className={s.item}>
          <p>{title}</p>
                <p>{texts[index]}</p>
                </div>
            ))}
          <div className={s.button}>
            <Button title="Book a demo" icon="/img/calendar.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
