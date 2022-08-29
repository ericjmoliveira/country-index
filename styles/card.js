import styled from 'styled-components';

export const Container = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 5px;
    background: #000;
    color: #fff;
    text-align: center;

    div {
        height: 75%;
    }

    span {
        font-size: 4rem;
    }

    a {
        margin-bottom: 0.5rem;
        background: transparent;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: #fff;

        &:hover {
            transition: 0.2s;
            background: #fff;
            color: #000;
        }
    }
`;
