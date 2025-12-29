import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { DifferencesCards } from './componets/cards/differencesCards'
import { DifferencesSection } from './componets/layout/differencesSection'
import { Footer } from './componets/layout/footer'
import { Header } from './componets/layout/header'
import { Main } from './componets/layout/main'
import { Section } from './componets/layout/section'
import { Contato } from './pages/contato'
import { Cardapio } from './pages/cardapio'
import { Produto } from './pages/produto'
import { Contador } from './pages/contador'
import { CardCep } from './pages/cardCep'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cep' element={<CardCep/>}/>
        <Route path='/contador' element={<Contador/>} />
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/cardapio' element={<Cardapio/>} />
        <Route path='/produto' element={<Produto/>} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
