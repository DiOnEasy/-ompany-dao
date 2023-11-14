import { title } from "process";
import { FC } from "react";

interface buttonData {
  title: string;
  icon: string;
}

export const Button: FC<buttonData> = ({ title, icon }) => {
  return <>
  <a href="">{title}<img src={icon} alt="" /></a>
  </>;
};
