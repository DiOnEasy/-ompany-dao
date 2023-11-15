import { FC } from "react";


interface IFaqItem {
    title: string;
    text: string;
  }
  


export const FaqItem : FC<IFaqItem> =({title, text}) =>{
    return(
        <>
        <p>{title}</p>
        <p>{text}</p>
        </>
    )
}