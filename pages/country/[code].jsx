import Head from 'next/head';
import Link from 'next/link';
import { gql } from '@apollo/client';

import client from '../../graphql/client';

export async function getStaticPaths() {
    const { data } = await client.query({
        query: gql`
            {
                countries {
                    code
                }
            }
        `
    });

    const paths = data.countries.map((country) => {
        return {
            params: {
                code: country.code
            }
        };
    });

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const code = context.params.code;

    const { data } = await client.query({
        query: gql`
            {
                country(code:"${code}") {
                    code
                    name
                    native
                    phone
                    continent {
                        name
                    }
                    capital
                    currency
                    languages {
                        name
                    }
                    emoji
                }
            }
        `
    });

    return {
        props: {
            country: data.country
        }
    };
}

export default function Country({ country }) {
    return (
        <>
            <Head>
                <title>{country.name}</title>
            </Head>
            <main>
                <header>
                    <h1>
                        {country.emoji} <span>{country.name}</span>
                    </h1>
                </header>
                <section>
                    <p>
                        Native name <span>{country.native}</span>
                    </p>
                    <p>
                        Continent located <span>{country.continent.name}</span>
                    </p>
                    <p>
                        Capital <span>{country.capital ? country.capital : 'None'}</span>
                    </p>
                    <p>
                        Main language{' '}
                        <span>
                            {country.languages.length > 0 ? country.languages[0].name : 'None'}
                        </span>
                    </p>
                    <p>
                        Phone code <span>+{country.phone}</span>
                    </p>
                    <p>
                        Country code <span>{country.code}</span>
                    </p>
                    <p>
                        Currency <span>{country.currency ? country.currency : 'None'}</span>
                    </p>
                    <div>
                        <p>
                            <a
                                href={`https://en.wikipedia.org/wiki/${country.name
                                    .split(' ')
                                    .join('_')}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Go to the wikipedia page
                            </a>
                        </p>
                        <p>
                            <Link href={'/'}>See all the countries</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
