import { FC } from "react";
import s from './Tokenization.module.css';
import { TokenizationContent } from "./tokenization-content/TokenizationContent";
export interface ITokenization {
  image: string;
  titles: string[];
  texts: string[];
}

const TokenizationData: ITokenization[] = [
  {
    image: "",
    titles: [
      "Sell or airdrop tokens directly to your stakeholders",
      "Integrate with your product",
      "Access to secondary markets",
      "Compliance built in",
    ],
    texts: [
      "Share the Token Purchasing Form with your end users",
      "The Token Purchasing Form can be embedded into your website",
      "List your tokens on any exchange",
      "Verify the identity of your stakeholders and enable regional restrictions",
    ],
  },
];

export const Tokenization: FC = () => {
  return (
    
      <div className={s.wrapper}>
        <div className={s.title}>
          <p>Tokenization Platform as a Service</p>
        </div>
        <div className={s.navbar}>
          <span>Token Offerings</span>
          <span>Treasury Management</span>
          <span>Governance</span>
          <span>Business Administration</span>
        </div>
        <div className={s.content}>
          <TokenizationContent
            image="/img/tokenization/tokenization-1.png"
            titles={TokenizationData[0].titles}
            texts={TokenizationData[0].texts}
          />
        </div>
      </div>
    
  );
};
