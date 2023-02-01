import { Lista } from "./styles"

export function Products({lista, currentSale, setCurrentSale, toast, productsSearch}){

    function addToCart(event, product){
        setCurrentSale([...currentSale, product])
        toast.success(`${product.name} adicionado ao carrinho`, {autoClose: 1000})
    }
    function removeFromCart(event, product){
        setCurrentSale([...currentSale.filter(item => item !== product)])
    }
    return(
        <Lista>
            {   
                productsSearch.length > 0 ? (
                    productsSearch.map(product => (
                        <li key={product.id}>
                        <img src={product.img} alt="" className="card-img" />
                        <div>
                        <h2>{product.name}</h2>
                        <span>{product.category}</span>
                        <h3>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
                        {
                            currentSale.includes(product) ? (
                                <button onClick={(event) => removeFromCart(event, product)}>Remover do carrinho</button>
                            ) : (
                                <button onClick={(event) => addToCart(event, product)}>Adicionar</button>
                            )
                        }
                        </div>
                    </li>
                    ))
                ) :
                lista.map(product => (
                    <li key={product.id}>
                        <img src={product.img} alt="" className="card-img" />
                        <div>
                        <h2>{product.name}</h2>
                        <span>{product.category}</span>
                        <h3>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
                        {
                            currentSale.includes(product) ? (
                                <button onClick={(event) => removeFromCart(event, product)}>Remover do carrinho</button>
                            ) : (
                                <button onClick={(event) => addToCart(event, product)}>Adicionar</button>
                            )
                        }
                        </div>
                    </li>
                ))
            }
        </Lista>
    )
}