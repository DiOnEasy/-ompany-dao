import { FC } from "react";
import s from './PropositonItem.module.css';
interface IPropositionItem {
  title: string;
  text: string;
  image: string;
}

export const PropositionItem: FC<IPropositionItem> = ({
  title,
  text,
  image,
}) => {
  return (
      <div className={s.wrapper}>
        <div className={s.icon}>
          <img src={image} alt="" />
        </div>
        <div className={s.text}>
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </div>
  );
};
