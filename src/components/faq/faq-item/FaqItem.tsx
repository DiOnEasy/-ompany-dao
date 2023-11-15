import { FC, useState } from "react";
import s from "./FaqItem.module.css";

interface IFaqItem {
  title: string;
  text: string;
  index: number;
}

export const FaqItem: FC<IFaqItem> = ({ title, text, index }) => {
  const [shown, setShown] = useState(null);

  const toggleShown = (index: any) => {
    setShown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={s.wrapper}>
      <p
        onClick={() => {
          toggleShown(index + 1);
        }}
        className={s.title}
      >
        <span>{title}</span>
        <span>
          <div className={s.line}></div>
          {!shown && <div className={s.line}></div>}
        </span>
      </p>
      {shown && <p className={s.text}>{text}</p>}
    </div>
  );
};
