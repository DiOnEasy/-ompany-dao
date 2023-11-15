import { FC } from "react";

interface IAdvantagesItem {
  title: string;
  image:string
}



export const AdvantagesItem : FC<IAdvantagesItem> = ({title, image}) => {
  return (
    <>
        <div>
          <div><img src={image} alt="" /></div>
          <div><p>{title}</p></div>
        </div>

    </>
  );
};
