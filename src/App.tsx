import { useEffect, useState } from 'react';
import { products } from './utilities/db';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

function App() {
  const [income, setIncome] = useState<number>(0);
  const [total, setTotal] = useState<number>(5);

  useEffect(() => {
    const invertal = setInterval(() => {
      setTotal(prev => prev + income);
    }, 1000)
    return () => clearInterval(invertal)

  }, [total])

  useEffect(() => {
    if (localStorage.length > 0) {
      const restoreMoney = localStorage.getItem('totalMoney')
      const restoreIncome = localStorage.getItem('totalIncome')

      const transformMoney = Number(restoreMoney)
      const transformIncome = Number(restoreIncome)

      setTotal(transformMoney)
      setIncome(transformIncome)
      toast(`Carregando informações!`);
    }
  }, [])

  useEffect(() => {
    if (income > 0) {
      const invertal = setInterval(() => {
        localStorage.setItem('totalMoney', JSON.stringify(total))
        localStorage.setItem('totalIncome', JSON.stringify(income))
      }, 1000)
      return () => clearInterval(invertal)
    }
  }, [total])

  function buyProducts(product: any) {
    if (total >= product.cost) {
      setIncome(prevIncome => prevIncome + product.profit);
      setTotal(prevTotal => prevTotal - product.cost)
      product.quantity += 1;
      localStorage.setItem('productQuantity', product.quantity)
      toast(`${product.name} comprado com sucesso!`);

    } else {
      toast(`Dinheiro insuficiente!`)
    }
  }

  return (
    <div className="App flex h-screen ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      <div className=' bg-slate-300 h-1/2 w-100 rounded-lg m-auto' >
        <h1 className='text-center py-4 text-3xl font-bold'>Farming Game</h1>
        <header className='p-2 bg-slate-400 rounded'>
          <h1 className="font-bold text-2xl">Total: ${total.toFixed(2)}</h1>
          <span>(${income.toFixed(2)}/s)</span>
        </header>
        <main >
          <div>
            <h1 className='text-2xl text-center'>Produtos:</h1>
          </div>
          <div className="products ">
            <div className='flex align-top justify-center'>
              {products.map((item: any) => {
                return (
                  <div key={item.name} className='w-48 p-4 grid '>
                    <h4 className='text-lg text-center font-bold m-2'>{item.name}</h4>
                    <button className=' font-bold  hover:bg-blue-200' onClick={() => buyProducts(item)}>Comprar: ${item.cost}</button>
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
