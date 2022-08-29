import styled from 'styled-components';

export const Container = styled.main`
    h1 {
        text-align: center;
    }
`;

export const Header = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    background: #000;
    color: #fff;
`;

export const Countries = styled.section`
    padding: 1.5rem 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
`;
