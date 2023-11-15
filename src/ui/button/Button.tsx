import { FC } from "react";
import s from './Button.module.css';
interface buttonData {
  title: string;
  icon: string;
}

export const Button: FC<buttonData> = ({ title, icon }) => {
  return (
    <div className={s.wrapper}>
      <a href="">
       <span> {title} </span>
        <img src={icon} alt="" />
      </a>
    </div>
  );
};
