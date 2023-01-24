// import { useState } from 'react'
export function Products() {
    // const [income, setIncome] = useState<number>(0);

    const apple = {
        name: 'Maçã',
        cost: 1.00,
        profit: 0.10,
        quantity: 0,
        inflation: 0.05,
    }
    const lemon = {
        name: 'Limão',
        cost: 2.00,
        profit: 0.20,
        quantity: 0,

        inflation: 0.10,
    }
    const potato = {
        name: 'Batata',
        cost: 5.00,
        profit: 0.50,
        quantity: 0,
        inflation: 0.25,
    }
    const watermelon = {
        name: 'Melância',
        cost: 10.00,
        profit: 1.00,
        quantity: 0,
        inflation: 0.50,
    }
    // function buyProducts(product: any) {
    //     setIncome(prev => prev + product.profit);
    // }

    // return (
    //     <main>
    //         <div>
    //             <h2>Produtos:</h2>
    //         </div>
    //         <div className="products">
    //             <div>
    //                 <h4>{apple.name}</h4>
    //                 <button onClick={() => buyProducts(apple)}>Comprar</button>
    //             </div>
    //             <div>
    //                 <h4>{lemon.name}</h4>
    //                 <button onClick={() => buyProducts(lemon)}>Comprar</button>
    //             </div>
    //             <div>
    //                 <h4>{potato.name}</h4>
    //                 <button onClick={() => buyProducts(potato)}>Comprar</button>
    //             </div>
    //             <div>
    //                 <h4>{watermelon.name}: {watermelon.quantity} </h4>
    //                 <button onClick={() => buyProducts(watermelon)}>Comprar - ${watermelon.cost}</button>
    //             </div>

    //         </div>

    //     </main>
    // )
}