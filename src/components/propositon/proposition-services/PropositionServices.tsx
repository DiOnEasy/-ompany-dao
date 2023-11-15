import { FC } from "react";

export const PropositionServices: FC = () => {
  return (
    <>
      <div>
        <p>Jurisdictions</p>
        <p>
          <span>
            <img src="/img/proposition-services/usa.svg" alt="" />
            US
          </span>
          <span>
            <img src="/img/proposition-services/panama.svg" alt="" />
            Panama
          </span>
        </p>
      </div>
      <div>
        <p>Payment Methods</p>
        <p>
          <span>
            <img src="/img/proposition-services/visa.svg" alt="" />
          </span>
          <span>
            <img src="/img/proposition-services/mastercard.svg" alt="" />
          </span>
          <span>
            <img src="/img/proposition-services/g-pay.svg" alt="" />
          </span>
          <span>ACH, Wire</span>
        </p>
      </div>
      <div>
        <p>Networks</p>
        <p>
          <span>
            <img src="/img/proposition-services/g-pay.svg" alt="" /> Ethereum
          </span>
          <span>
            <img src="/img/proposition-services/g-pay.svg" alt="" /> Polygon
          </span>
        </p>
      </div>
    </>
  );
};
