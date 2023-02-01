import styled from "styled-components";

export const Lista = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 1rem;
    gap: 3rem;
    li{
        border: 1px solid var(--grey-20);
        display: flex;
        flex-direction: column;
        max-height: 100%;
        justify-content: space-between;
        padding: 2rem;
        border-radius: 5px;
    }
    li > img{
        width: 175px;
        height: 175px;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    div > span{
        color: var(--grey-50)
    }
    div > h3{
        color: var(--primary-color)
    }
    div > button{
        color: var(--grey-0);
        border: none;
        border-radius: var(--btn-radius);
        background-color: var(--primary-color);
        padding: 1rem;
    }
    @media (min-width: 1025px){
        flex-wrap: wrap;
        li{
            width: 15vw;
        }
    }
`