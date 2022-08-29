import styled from 'styled-components';

export const Container = styled.main`
    h1 {
        text-align: center;

        span {
            margin-left: 0.5rem;
        }
    }
`;

export const Header = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    background: #000;
    color: #fff;
`;

export const Info = styled.section`
    margin: 1.5rem 0;
    padding: 2rem;
    line-height: 2;
    background: #000;
    color: #fff;

    p {
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
        font-weight: 700;
    }

    a {
        background: transparent;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 0.25rem 1rem;
        text-decoration: none;
        color: #fff;
        margin-bottom: 1rem;

        &:hover {
            transition: 0.2s;
            background: #fff;
            color: #000;
        }
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
    }
`;
