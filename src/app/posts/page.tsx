import PostsList from '@/components/posts-list';
import { Suspense } from 'react';

export default async function Home() {
    return (
        <main>
            <h2>POSTS:</h2>
            <Suspense fallback="loading...">
                <PostsList />
            </Suspense>
        </main>
    );
}
