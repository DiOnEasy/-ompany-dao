import { FC } from "react";
import s from './AdvantagesItem.module.css';
interface IAdvantagesItem {
  title: string;
  image:string
}



export const AdvantagesItem : FC<IAdvantagesItem> = ({title, image}) => {
  return (
    <>
        <div className={s.wrapper}>
          <div className={s.icon}><span><img src={image} alt="" /></span></div>
          <div className={s.title}><p>{title}</p></div>
        </div>

    </>
  );
};
