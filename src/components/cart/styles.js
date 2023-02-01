import styled from "styled-components";
import { GlobalStyle } from "../../styles/globalStyles";

export const Cart = styled.div`
    margin: .5rem;
    padding: 1rem;
    >h2{
        color: var(--grey-0)
    }
    >div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    >div > div >span{
        color: var(--grey-50)
    }
    >div >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    >div > button{
        background-color: var(--grey-20);
        color: var(--grey-50);
        border: none;
        border-radius: var(--btn-radius);
        padding: 1.5rem;
    }
`
export const Lista = styled.ul`
    list-style: none;
    padding: 0;
    max-height: 70vh;
    overflow-y: scroll;
    border-bottom: 2px solid var(--grey-20);
    h2{
        text-align: center;
    }
    li{
        padding: 1rem;
        height: 20vh;
        display: flex;
        margin-bottom: 1rem;
    }
    li > img{
        background-color: var(--grey-20);
        border-radius: 8px;
    }
    li > div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
    }
    li > div > div > span{
        color: var(--grey-50)
    }

`
export const CartTitle = styled.h2`
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 5px;
`