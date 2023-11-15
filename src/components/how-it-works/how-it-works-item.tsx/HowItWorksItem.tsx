import { FC } from "react";

interface IHowItWorksItem {
  title: string;
  text: string;
}
export const HowItWorksItem: FC<IHowItWorksItem> = ({title, text}) => {
  return (
    <>
      <div>
    
          <div>
            <p>{title}</p>
            <p>{text}</p>
          </div>
      </div>
    </>
  );
};
