import { FC } from "react";

interface IPropositionItem {
  title: string;
  text: string;
  image: string;
}

export const PropositionItem: FC<IPropositionItem> = ({
  title,
  text,
  image,
}) => {
  return (
    <>
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
