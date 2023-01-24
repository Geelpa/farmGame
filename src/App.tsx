import { useEffect, useState, createElement } from 'react';
import './styles/global.css';
import { products } from './utilities/db';

function App() {
  let [income, setIncome] = useState<number>(0);
  let [total, setTotal] = useState<number>(5);


  useEffect(() => {
    if (income > 0) {
      localStorage.setItem('totalMoney', JSON.stringify(total))
      localStorage.setItem('totalIncome', JSON.stringify(income))
    }
  }, [total])

  useEffect(() => {
    if (income == 0) {
      const restoreMoney = localStorage.getItem('totalMoney')
      const restoreIncome = localStorage.getItem('totalIncome')

      let transformMoney = Number(restoreMoney)
      let transformIncome = Number(restoreIncome)

      setTotal(transformMoney)
      setIncome(transformIncome)

      console.log('informações carregadas')
    }

  })

  useEffect(() => {
    if (income > 0) {
      const invertal = setInterval(() => {
        setTotal(total += income);
      }, 1000)
      return () => clearInterval(invertal)
    }

  }, [total])

  function buyProducts(product: any) {
    if (total > product.cost) {
      setIncome(prevIncome => prevIncome + product.profit);
      setTotal(prevTotal => prevTotal - product.cost)

    } else {
      return console.log('dinheiro insuficiente')
    }
  }

  return (
    <div className="App">
      <header className='p-2 bg-slate-400 rounded'>
        <h1 className="font-bold text-2xl">Total: ${total.toFixed(2)}</h1>
        <span>(${income.toFixed(2)})</span>
      </header>
      <main >
        <div>
          <h2>Produtos:</h2>
        </div>
        <div className="products">
          <div>
            {products.map((item: any) => {
              return (
                <div key={item.name}>
                  <h4>{item.name} - ${item.cost.toFixed(2)}</h4>
                  <button onClick={() => buyProducts(item)}>Comprar </button>
                </div>
              )
            })}
          </div>
        </div>
      </main >
    </div >
  )
}

export default App
