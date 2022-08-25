import Head from 'next/head';
import { gql } from '@apollo/client';

import client from '../graphql/client';

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
            <div>
                <h1>Country Index</h1>
                <ul>
                    {countries.map((country) => (
                        <li key={country.code}>
                            {country.emoji} {country.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
