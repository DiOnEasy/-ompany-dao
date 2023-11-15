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
          <Button title="Tokenization Guide" icon='/img/book.svg'/>
          <Button title="Legal Opinion" icon='/img/hat.svg'/>
        </div>
      </div>
    </>
  );
};
