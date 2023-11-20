import { FC } from "react";
import s from './Button.module.css';
interface buttonData {
  title: string;
  icon: string;
  link: string;
}

export const Button: FC<buttonData> = ({ title, icon, link }) => {
  return (
    <div className={s.wrapper}>
      <a href={link}>
       <span> {title} </span>
        <img src={icon} alt="" />
      </a>
    </div>
  );
};
