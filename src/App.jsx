import { useEffect, useState } from 'react'
import { api } from './services/api';
import { CreateHeader } from './components/header';
import { Products } from './components/products';
import { MyCart } from './components/cart';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from './styles/globalStyles';
import { Main } from './styles/App';

function App() {
  
  const [products, setProducts] = useState([]);
  const [productsSearch, setProductsSearch] = useState([]);
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
  function searchProduct(string){
    const search = products.filter(item => item.name.toLowerCase().includes(string))
    setProductsSearch(search)
  }
  
  return (
    <div className="App">
      <GlobalStyle/>
      <CreateHeader searchProduct={searchProduct}/>
      <Main>
        <Products lista={products} currentSale={currentSale} setCurrentSale={setCurrentSale} searchProduct={searchProduct} toast={toast} productsSearch={productsSearch}/>
        <MyCart meusProdutos={currentSale} removeItemFromCart={removeItemFromCart} setCurrentSale={setCurrentSale} toast={toast}/>
      </Main>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
      <ToastContainer />
    </div>
    
  )
}

export default App
