import { FC } from "react";
import { Button } from "../../../ui/button/Button";
import { ITokenization } from "../Tokenization";

export const TokenizationContent: FC<ITokenization> = ({image, titles, texts}) => {
  return (
    <>
      <div>
      <div><img src={image} alt="" /></div>
      <div>
      <div>
        {titles.map((title, index) =>(
          <>
          <p>{title}</p>
          <p>{texts[index]}</p>
          </>
          
        ))}
      </div>
        <Button title="Book a demo" icon="/img/calendar.svg"/>
      </div>
      </div>
    </>
  );
};
