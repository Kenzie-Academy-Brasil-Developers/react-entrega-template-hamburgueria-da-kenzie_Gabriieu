import logo from '../../assets/logo.png'
import {Container} from './styles'

export function CreateHeader (){
    return(
        <Container>
            <img src={logo} alt="logo" id="logo" />
            <div>
                <input type="text" id="search-bar" placeholder='Pesquise aqui'/>
                <button>Pesquisar</button>
            </div>
        </Container>
    )
}