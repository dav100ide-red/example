'use client';
import { useParams } from 'next/navigation';

export default function Page() {
    const { id } = useParams();
    return <p>Post details: {id}</p>;
}
