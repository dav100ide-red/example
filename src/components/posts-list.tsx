import Link from 'next/link';

export default async function PostsList() {
    const postsLinks = [
        { label: 'His mother', postId: 1 },
        { label: 'Article 2', postId: 2 },
    ];

    const slowPosts = await new Promise<typeof postsLinks>((resolve) =>
        setTimeout(() => resolve(postsLinks), 2500)
    );

    return (
        <ul>
            {slowPosts.map((link) => (
                <li className="list-disc" key={link.postId}>
                    <Link href={`/posts/${link.postId}`}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
}
