import Link from 'next/link';
import { Container } from '../styles/card';

export default function Card({ countryData }) {
    return (
        <Container>
            <div>
                <span>{countryData.emoji}</span>
                <h4>{countryData.name}</h4>
            </div>
            <Link href={`/country/${countryData.code}`}>More info</Link>
        </Container>
    );
}
