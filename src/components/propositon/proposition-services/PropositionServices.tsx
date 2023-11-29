import { FC } from "react";
import s from './PropositionServices.module.css';
export const PropositionServices: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <p className={s.title}>Jurisdictions</p>
        <p className={s.icons}>
          <span>
            <img src="/img/proposition-services/usa1.svg" alt="" />
            US
          </span>
          <span>
            <img src="/img/proposition-services/panama1.svg" alt="" />
            Panama
          </span>
        </p>
      </div>
      <div className={s.item}>
        <p className={s.title}>Payment Methods</p>
        <p className={s.icons}>
          <span>
            <img src="/img/proposition-services/visa1.svg" alt="" />
          </span>
          <span>
            <img src="/img/proposition-services/mastercard1.svg" alt="" />
          </span>
          <span>
            <img src="/img/proposition-services/g-pay1.svg" alt="" />
          </span>
          <span>ACH, Wire</span>
        </p>
      </div>
      <div className={s.item}>
        <p className={s.title}>Networks</p>
        <p className={s.icons}>
          <span>
            <img src="/img/proposition-services/ethereum1.svg" alt="" /> Ethereum
          </span>
          <span>
            <img src="/img/proposition-services/polygon1.svg" alt="" /> Polygon
          </span>
        </p>
      </div>
    </div>
  );
};
