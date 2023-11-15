import { Advantages } from "../../components/advantages/Advantages"
import { Faq } from "../../components/faq/Faq"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { HowItWorks } from "../../components/how-it-works/HowItWorks"
import { Proposition } from "../../components/propositon/Propositon"
import { Tokenization } from "../../components/tokenization/Tokenization"

import s from './Home.module.css'


export const Home = () =>{
    return(
        <div>
            <div className={s.wrapper}>
                <Header/>
                <Advantages/>
                <HowItWorks/>
                <Tokenization/>
                <Proposition/>
                <Faq/>
                <Footer/>
            </div>
        </div>
    )
}