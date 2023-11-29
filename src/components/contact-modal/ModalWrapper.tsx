import { observer } from "mobx-react-lite";
import { MouseEvent, useEffect } from 'react';
import modalStore from "../../store/modal/modal.store";
import s from "./ModalWrapper.module.css";
import { ModalThanks } from "./modal-thanks/ModalThanks";
import { ContactModal } from "./modal/ContactModal";

export const ModalWrapper = observer(() => {
  const {
    initialState: { submitted },
    setShown,
    setSubmitted,
  } = modalStore;

  useEffect(() => {
      //document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [submitted]);


  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // if (e.target === e.currentTarget) {
    //   setShown(false);
    //   setSubmitted(false);
    // }
  };
  return (
    <div onClick={handleClick} className={s.modal__wrapper}>
      {submitted ? <ModalThanks /> : <ContactModal />}
    </div>
  );
});
