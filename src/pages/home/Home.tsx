import { FC } from "react";
import { Advantages } from "../../components/advantages/Advantages";
import { Faq } from "../../components/faq/Faq";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { HowItWorks } from "../../components/how-it-works/HowItWorks";
import { Proposition } from "../../components/propositon/Propositon";
import { Tokenization } from "../../components/tokenization/Tokenization";

import { observer } from "mobx-react-lite";
import modalStore from "../../store/modal/modal.store";
import s from "./Home.module.css";
import { ModalWrapper } from "../../components/contact-modal/ModalWrapper";

export const Home: FC = observer(() => {
  const { shown } = modalStore.initialState;
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Header />
        <Advantages />
        <HowItWorks />
        <Tokenization />
        <Proposition />
        <Faq />
        <Footer />

        {shown && <ModalWrapper />}
      </div>
    </div>
  );
});