export interface ITokenization {
  image: string;
  titles: string[];
  texts: string[];
}

export const TokenizationData: ITokenization[] = [
  {
    image: "/img/tokenization/tokenization-1.png",
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
  {
    image: "/img/tokenization/tokenization-2.png",
    titles: ["Bank Accounts", "On-chain Treasury", "FIAT on-ramp", "Exchange"],
    texts: [
      "Integrated corporate bank accounts can be used to make and receive FIAT payments",
      "Store digital assets in your company’s smart contract and connect to any De-Fi protocol",
      "Allow your stakeholders to purchase tokens with traditional payment methods",
      "Open exchange accounts to bridge between your on-chain treasury and bank account",
    ],
  },
  {
    image: "/img/tokenization/tokenization-3.png",
    titles: [
      "Operating Agreement",
      "Proposals",
      "Transferable voting rights",
      "Notifications",
    ],
    texts: [
      "Our standard operating agreement describes the functionality of your company’s smart contracts",
      "Allow your stakeholders to vote on key decisions in the business",
      "Your stakeholders can delegate their votes to a trusted 3rd party",
      "Your stakeholders receive notifications about proposals and events via email or telegram",
    ],
  },
  {
    image: "/img/tokenization/tokenization-4.png",
    titles: [
      "Legal entity set up",
      "Management Service",
      "Entity Maintenance",
      "On-going Support",
    ],
    texts: [
      "We take care of incorporation, operating agreement and tax registration",
      "The manager acts as a formal point of contact and administrative representative for your holding company",
      "We help with annual report submissions and tax fillings for your holding company",
      "We provide real time support to your stakeholders as they interact with the Company DAO platform",
    ],
  },
];
