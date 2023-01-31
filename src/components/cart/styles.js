import styled from "styled-components";

export const Lista = styled.ul`
    list-style: none;
    padding: 0;
    max-height: 70vh;
    overflow-y: scroll;
    li{
        height: 20vh;
        display: flex;
        margin-bottom: 1rem;
    }
    li > img{
        width: 30%;
        height: 100%;
        background-color: gray;
        border-radius: 8px;
    }
    li > div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

`