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
        width: 100%;
        display: flex;
        justify-content: space-between;
        border: 1px solid gray;
        border-radius: 8px;
    }
    input{
        height: 60px;
    }
    button{
        height: 50px;
    }
`