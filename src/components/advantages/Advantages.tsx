import { AdvantagesItem } from "./advantages-item/AdvantagesItem";
import s from './Advantages.module.css';
interface IAdvantages {
  title: string;
}

const advantagesData: IAdvantages[] = [
  { title: "Equity" },
  { title: "Real Estate" },
  { title: "Financial Instruments" },
  { title: "Intellectual Property" },
  { title: "Physical Assets" },
  { title: "Art and Collectibles" },
  { title: "Contracts" },
  { title: "Commodities" },
];

export const Advantages = () => {
  return (
    <>
    <div className={s.wrapper}>
     {advantagesData.map((item, index) =>(
      <AdvantagesItem title={item.title} image={`/img/advantages/advantages-${index+1}.svg`}/>
     ))}
    </div>
    </>
  );
};
