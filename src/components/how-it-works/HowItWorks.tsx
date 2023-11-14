import { Button } from "../../ui/button/Button";
import { HowItWorksItem } from "./how-it-works-item.tsx/HowItWorksItem";

export const HowItWorks = () => {
  return (
    <>
      <div>
        <div>
          <p>How it works</p>
        </div>
        <div>
          <HowItWorksItem/>
        </div>
        <div>
          <Button title="Tokenization Guide" icon='/img/hat.svg'/>
          <Button title="Legal Opinion" icon='/img/book.svg'/>
        </div>
      </div>
    </>
  );
};
