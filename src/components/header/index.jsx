import logo from '../../assets/logo.png'
import {Container} from './styles'

export function CreateHeader ({searchProduct}){
    return(
        <Container>
            <img src={logo} alt="logo" id="logo" />
            <div>
                <input onChange={(event) => searchProduct(event.target.value)} type="text" id="search-bar" placeholder='Pesquise aqui'/>
                <button>Pesquisar</button>
            </div>
        </Container>
    )
}