import { Button } from "../../ui/button/Button";
import { HowItWorksItem } from "./how-it-works-item/HowItWorksItem";
import s from './HowItWorks.module.css';


interface IHowItWorks {
  title: string;
  text: string;
}

const howItWorksItemData: IHowItWorks[] = [
  {
    title: "Legal Entity Set Up",
    text: "Purchase a blockchain managed holding company from Company DAO",
  },
  {
    title: "Asset Acquisition",
    text: "Transfer your assets or business interests to the holding company",
  },
  {
    title: "Token Offering",
    text: "Issue and sell tokens which represent a legal claim on the company or assets held by the company",
  },
  {
    title: "Asset Management",
    text: "Use the Company DAO platform to manage the holding company",
  },
];
export const HowItWorks = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.title}>
          <p>How it works</p>
        </div>
        <div className={s.content}>
        {howItWorksItemData.map((item, index) => (
            <HowItWorksItem title={item.title} text={item.text} index={index}/>
        ))}
        </div>
        <div className={s.buttons}>
          <Button title="Tokenization Guide" icon='/img/book.svg' link="https://drive.google.com/file/d/1VL4qVe7FzE1h7LNSofBG474qcZ7XZCVf/view?usp=sharing"/>
          <Button title="Legal Opinion" icon='/img/hat.svg' link="https://companydao.org/WY%20DAO%20Memorandum%20for%20Website%20on%20HB%20Letterhead%20(2.15.2023).pdf"/>
        </div>
      </div>
    </>
  );
};
