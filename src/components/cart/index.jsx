import { Lista } from "./styles";

export function MyCart({meusProdutos, removeItemFromCart, total}){
    return(
        <div className="cart">
            <h2 className="cart-title">Carrinho de compras</h2>
            <Lista>
                {   
                    meusProdutos.length === 0 ? (<h2 className="cart-empty">Seu carrinho está vazio</h2>) :
                    meusProdutos.map(product => (
                        <li key={product.id}>
                            <img src={product.img} alt={product.name} className="cart-img" />
                            <div>
                                <div>
                                    <h2>{product.name}</h2>
                                    <span>{product.category}</span>
                                </div>
                                <div>
                                    <span onClick={() => removeItemFromCart(product.id)}>Remover</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </Lista>
            <div>
                <span>Total</span><span>{meusProdutos.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}</span>
            </div>
        </div>
    )
}