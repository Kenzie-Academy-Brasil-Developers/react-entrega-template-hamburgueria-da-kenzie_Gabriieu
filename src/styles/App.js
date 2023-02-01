import styled from "styled-components";

export const Main = styled.main`
    @media (min-width: 769px){
        display: flex;
        flex-direction: row;
        ul{
            width: 60vw;
            flex-wrap: wrap;
        }
        div{
            width: 40vw;
        }
    }
`