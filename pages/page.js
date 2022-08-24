import Link from 'next/link';

<h1 className="title">
  Learn <a href="https://nextjs.org">Next.js!</a>
</h1>

<h1 className="title">
  Read <Link href="/posts/first-post">this page!</Link>
</h1>

import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}