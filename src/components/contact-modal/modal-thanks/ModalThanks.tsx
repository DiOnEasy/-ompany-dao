import modalStore from "../../../store/modal/modal.store";
import s from "./ModalThanks.module.css";

export const ModalThanks = () => {
  const { setShown, setSubmitted } = modalStore;

  return (
    <div className={s.modal__thanks}>
      <div className={s.modal__x}>
        <span
          onClick={() => {
            setShown(false);
            setSubmitted(false);
          }}
        >
          <img src="/img/x.svg" alt="" />
        </span>
      </div>
      <div className={s.modal__content}>
        <div className={s.modal__icon}>
          <img src="/img/checkmark.svg" alt="" />
        </div>
        <div className={s.modal__text}>
          <p>Submitted</p>
          <p>We’ll contact with you as soon as possible</p>
        </div>
      </div>
    </div>
  );
};
