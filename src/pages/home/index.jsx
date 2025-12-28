import { DifferencesSection } from '../../componets/layout/differencesSection'
import { Footer } from '../../componets/layout/footer'
import { Header } from '../../componets/layout/header'
import { Main } from '../../componets/layout/main'
import { Section } from '../../componets/layout/section'
import './style.css'
export const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Section />
            <DifferencesSection />
            <Footer />
        </>
    )
}