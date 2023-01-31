import { useEffect, useState } from 'react'
import { api } from './services/api';
import { CreateHeader } from './components/header';
import { Products } from './components/products';
import { MyCart } from './components/cart';


function App() {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
    
  useEffect(() => {
    async function requestProducts(){
      try{
        const response = await api.get('products')
        setProducts(response.data)
      } catch (error){
        console.log(error)
      }
    }
    requestProducts()
  }, [])

  function removeItemFromCart(id){
    const newList = currentSale.filter(item => item.id !== id)
    setCurrentSale(newList)
  }

  return (
    <div className="App">
      <CreateHeader/>
      <main>
        <Products lista={products} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
        <MyCart meusProdutos={currentSale} removeItemFromCart={removeItemFromCart}/>
      </main>
    </div>
  )
}

export default App
