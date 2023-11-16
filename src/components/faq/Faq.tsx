import { FC, useState } from "react";
import s from './Faq.module.css';
import { FaqItem } from "./faq-item/FaqItem";
import { faqData } from "./faq.data";



export const Faq: FC = () => {
  const [shown, setShown] = useState(null);

  return (
    
      <div className={s.wrapper}>
        <div className={s.title}>
          <p>Faq</p>
        </div>
        <div className={s.content}>
          {faqData.map((item, index) => (
            <FaqItem shown={shown} setShown={setShown} title={item.title} text={item.text} index={index}/>
          ))}
        </div>
      </div>
    
  );
};
