import { FC } from "react";
import s from "./FaqItem.module.css";

interface IFaqItem {
  title: string;
  text: string;
  index: number;
  shown: any;
  setShown: any;
}

export const FaqItem: FC<IFaqItem> = ({ shown, setShown, title, text, index }) => {

  const toggleShown = (index: any) => {
    setShown((prevIndex:any) => (prevIndex === index ? null : index));
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
          {shown != index + 1 && <div className={s.line}></div>}
        </span>
      </p>
      {shown == index + 1 && <p className={s.text}>{text}</p>}
    </div>
  );
};
