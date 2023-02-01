import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 12%;
    padding-top: 1.5rem;
    img{
        width: 36%;
    }
    div{
        width: 95%;
        display: flex;
        justify-content: space-between;
        border: 1px solid gray;
        border-radius: 8px;
        align-items: center
    }
    input{
        height: 60px;
        width: 70%;
        border: none;
        margin: .5rem;
    }
    button{
        margin: .5rem;
        width: 30%;
        height: 50px;
        background-color: var(--primary-color);
        border: none;
        border-radius: var(--btn-radius);
        color: var(--grey-0)
    }
`