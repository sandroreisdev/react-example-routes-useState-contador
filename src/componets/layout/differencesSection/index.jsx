import { DifferencesCards } from '../../cards/differencesCards'
import './style.css'
import iconTomato from '../../../assets/images/tomato.svg'
import iconChef from '../../../assets/images/chef.svg'
import iconChair from '../../../assets/images/chair.svg'
import iconCalendar from '../../../assets/images/calendar.svg'

export const DifferencesSection = () =>{
    return(
        <section className='differences-section'>
            <h2>Nossos <span>Diferenciais</span></h2>
            
            <div className='container-cards-differences'>
                <DifferencesCards linkImg= {iconTomato} altImg="Ilustração Tomate" titulo="Ingredientes Frescos" descricao="Selecionados diariamente para garantir o melhor sabor" />
                <DifferencesCards linkImg= {iconChef} altImg="Ilustração Chef" titulo="Chef Especializado" descricao="Receitas únicas criadas por nosso chef premiado." />
                <DifferencesCards linkImg= {iconChair} altImg="Ilustração Cadeira" titulo="Ambente Aconchegante" descricao="Espaço perfeito para momentos especiais." />
                <DifferencesCards linkImg= {iconCalendar} altImg="Ilustração Calendário" titulo="Reserva simples" descricao="Garanta sua mesa com apenas alguns cliques." />
            </div>           
        </section>       

    )
}