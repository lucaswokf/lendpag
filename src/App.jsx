import { useState } from 'react'
import './App.css'
import suedXl1 from './assets/sued-xl-1.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <main>
        <header></header>
        <section className="produtos">
         
          {/* Card 1 */}
          <div className="card">
            <img src={suedXl1} alt="" />
            <h2>Tênis Suede XL</h2>
            <p className="desc">Esta nova abordagem ao clássico Suede inspira-se na herança da PUMA no breakdance e na sua influência no streetwear moderno</p>
            <p className="classificacao">★★★★☆ (10000)</p>
            <p className="preco">R$ 599,99</p>
            <p className="off">5%</p>
          </div>


        </section>
        <section className="destaque"></section>
        <footer></footer>
       </main>
    </>
  )
}

export default App
