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
                        native
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
        <div>
            <h1>More info about {country.name}</h1>
        </div>
    );
}
