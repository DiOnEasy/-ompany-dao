interface IHowItWorksItem {
  title: string;
  text: string;
}

const howItWorksItemData: IHowItWorksItem[] = [
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

export const HowItWorksItem = () => {
  return (
    <>
      <div>
        {howItWorksItemData.map((item, index) => (
          <div>
            <p>{item.title}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
