import Head from 'next/head';
import { gql } from '@apollo/client';

import client from '../graphql/client';
import { Container, Header, Countries } from '../styles/home';
import Card from '../components/Card';

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            {
                countries {
                    code
                    name
                    emoji
                }
            }
        `
    });

    return {
        props: {
            countries: data.countries
        }
    };
}

export default function Home({ countries }) {
    return (
        <>
            <Head>
                <title>Country Index</title>
            </Head>
            <Container>
                <Header>
                    <h1>Country Index</h1>
                </Header>
                <Countries>
                    {countries.map((country) => (
                        <Card key={country.code} countryData={country} />
                    ))}
                </Countries>
            </Container>
        </>
    );
}
