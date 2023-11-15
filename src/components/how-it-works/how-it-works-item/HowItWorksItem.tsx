import { FC } from "react";
import s from "./HowItWorksItem.module.css";

interface IHowItWorksItem {
  title: string;
  text: string;
  index: number;
}
export const HowItWorksItem: FC<IHowItWorksItem> = ({ title, text, index }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <div className={s.number}>
          <span>{index + 1}</span>
        </div>
        <div className={s.text}>
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
