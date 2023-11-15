import { FC } from "react";
import s from './PropositionServices.module.css';
export const PropositionServices: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <p className={s.title}>Jurisdictions</p>
        <p className={s.icons}>
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
      <div className={s.item}>
        <p className={s.title}>Payment Methods</p>
        <p className={s.icons}>
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
      <div className={s.item}>
        <p className={s.title}>Networks</p>
        <p className={s.icons}>
          <span>
            <img src="/img/proposition-services/ethereum.svg" alt="" /> Ethereum
          </span>
          <span>
            <img src="/img/proposition-services/polygon.svg" alt="" /> Polygon
          </span>
        </p>
      </div>
    </div>
  );
};
