import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
     <Link href="/layout">
          <a>List</a>
        </Link>

        <Link href="/postdata">
          <a>Posts</a>
        </Link>

     
    </div>
  )
}
