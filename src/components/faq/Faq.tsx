import { FC } from "react";
import s from './Faq.module.css';
import { FaqItem } from "./faq-item/FaqItem";

interface IFaq {
  title: string;
  text: string;
}

const faqData: IFaq[] = [
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const Faq: FC = () => {
  return (
    
      <div className={s.wrapper}>
        <div className={s.title}>
          <p>Faq</p>
        </div>
        <div className={s.content}>
          {faqData.map((item, index) => (
            <FaqItem title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    
  );
};
