import { Advantages } from "../../components/advantages/Advantages"
import { Header } from "../../components/header/Header"
import { HowItWorks } from "../../components/how-it-works/HowItWorks"
import { Tokenization } from "../../components/tokenization/Tokenization"




export const Home = () =>{
    return(
        <div>
            <div>
                <Header/>
                <Advantages/>
                <HowItWorks/>
                <Tokenization/>
            </div>
        </div>
    )
}