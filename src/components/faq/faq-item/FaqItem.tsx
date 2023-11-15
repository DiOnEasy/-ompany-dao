import { FC } from "react";
import s from "./FaqItem.module.css";

interface IFaqItem {
  title: string;
  text: string;
}

export const FaqItem: FC<IFaqItem> = ({ title, text }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>
        <span>{title}</span>
        <span>
          <div className={s.line}></div>
          <div className={s.line}></div>
        </span>
      </p>
      <p className={s.text}>{text}</p>
    </div>
  );
};
