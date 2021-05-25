import Head from 'next/head'
import Layout, {siteTitle} from '/components/layout'
import utilStyles from '/styles/utils.module.css'
import styles from '/styles/Home.module.css'
import Link from "next/link";


export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hi everyone, my name is Matías and I'm a computer science student.
                    I love languages, especially french. I made this blog to teach you some spanish and practice my french.
                    Alors, c'est parti !
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <footer>
                Read{' '}
                <Link href="/about">
                    <a>more about me!</a>
                </Link>
            </footer>
        </Layout>
    )
}