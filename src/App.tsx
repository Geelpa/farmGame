import { useEffect, useState } from 'react';
import { products } from './utilities/db';
import './styles/global.css';

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
    <div className="App flex h-screen ">
      <div className=' bg-slate-300 h-1/2 w-100 rounded-lg m-auto' >
        <h1 className='text-center py-4 text-3xl font-bold'>Farming Game</h1>

        <header className='p-2 bg-slate-400 rounded'>
          <h1 className="font-bold text-2xl">Total: ${total.toFixed(2)}</h1>
          <span>(${income.toFixed(2)}/s)</span>
        </header>
        <main >
          <div>
            <h1 className='text-2xl'>Produtos:</h1>
          </div>
          <div className="products ">
            <div className='flex align-top justify-center'>
              {products.map((item: any) => {
                return (
                  <div key={item.name} className='w-48 p-2 grid'>
                    <h4 className='text-base font-bold'>{item.name}: ${item.cost.toFixed(2)}</h4>
                    <button className='text-lg font-bold  hover:bg-blue-200' onClick={() => buyProducts(item)}>Comprar </button>
                  </div>
                )
              })}
            </div>
          </div>
        </main >
      </div>
    </div >
  )
}

export default App
