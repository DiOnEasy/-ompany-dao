import { FC, useState } from "react";
import s from "./Tokenization.module.css";
import { TokenizationContent } from "./tokenization-content/TokenizationContent";
import { TokenizationData } from "./tokenization.data";

export const Tokenization: FC = () => {
  const [tab, setTab] = useState(0);

  const links = [
    "Token Offerings",
    "Treasury Management",
    "Governance",
    "Business Administration",
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <p>Tokenization Platform as a Service</p>
      </div>
      <div className={s.navbar__wrapper}>
      <div className={s.navbar}>
        {links.map((link, index) => (
          <span
            className={index === tab ? s.selected : ""}
            onClick={() => {
              setTab(index);
            }}
          >
            <p>
            {link}
            </p>
           
          </span>
        ))}
      </div>
      </div>
      

      <div className={s.content}>
        <div className={s.line}></div>
        <TokenizationContent
          image={TokenizationData[tab].image}
          titles={TokenizationData[tab].titles}
          texts={TokenizationData[tab].texts}
        />
      </div>
    </div>
  );
};
