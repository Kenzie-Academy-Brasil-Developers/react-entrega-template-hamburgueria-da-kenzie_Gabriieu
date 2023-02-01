import { Cart, CartTitle, Lista } from "./styles";

export function MyCart({meusProdutos, removeItemFromCart, setCurrentSale, toast}){

    function clearCart(){
        meusProdutos.length === 0 ? (toast.warning('Seu carrinho já está vazio', {autoClose: 1000})) :
        setCurrentSale([])
    }
    return(
        <Cart>
            <CartTitle>Carrinho de compras</CartTitle>
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
                <div>
                    <h2>Total</h2><span>{meusProdutos.reduce((acc, cur) => acc + cur.price, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                </div>
                <button onClick={() => clearCart()}>Remover todos</button>
            </div>
        </Cart>
    )
}