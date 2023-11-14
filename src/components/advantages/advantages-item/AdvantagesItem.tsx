interface IData {
  title: string;
}

const data: IData[] = [
  { title: "Equity" },
  { title: "Real Estate" },
  { title: "Financial Instruments" },
  { title: "Intellectual Property" },
  { title: "Physical Assets" },
  { title: "Art and Collectibles" },
  { title: "Contracts" },
  { title: "Commodities" },
];



export const AdvantagesItem = () => {
  return (
    <>
      {data.map((item, index) => (
        <div>
          <div><img src={`/img/advantages/advantages-${index+1}.svg`} alt="" /></div>
          <div><p>{item.title}</p></div>
        </div>
      ))}
    </>
  );
};
