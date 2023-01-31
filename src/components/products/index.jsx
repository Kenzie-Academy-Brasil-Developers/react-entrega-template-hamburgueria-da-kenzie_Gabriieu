import { Lista } from "./styles"

export function Products({lista, currentSale, setCurrentSale}){

    function clickEvent(event, product){
        event.target.innerText = 'Adicionado ao carrinho'
        setCurrentSale([...currentSale, product])
        event.target.innerText = 'Adicionado ao carrinho'
    }

    return(
        <Lista>
            {
                lista.map(product => (
                    <li key={product.id}>
                        <img src={product.img} alt="" className="card-img" />
                        <div>
                        <h2>{product.name}</h2>
                        <span>{product.category}</span>
                        <span>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        {
                            currentSale.includes(product) ? (
                                <button>Adicionado ao carrinho</button>
                            ) : (
                                <button onClick={(event) => clickEvent(event, product)}>Adicionar</button>
                            )
                        }
                        </div>
                    </li>
                ))
            }
        </Lista>
    )
}