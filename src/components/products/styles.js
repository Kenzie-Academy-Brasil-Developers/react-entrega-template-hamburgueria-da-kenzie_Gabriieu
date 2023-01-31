import styled from "styled-components";

export const Lista = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 1rem;
    gap: 3rem;
    li{
        display: flex;
        flex-direction: column;
        max-height: 100%;
        justify-content: space-between;
    }
    li > img{
        width: 50vw;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`