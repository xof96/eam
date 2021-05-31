import Head from 'next/head'
import Link from "next/link";

import Layout, {siteTitle} from '/components/layout'
import Navbar from '/components/navbar'

import utilStyles from '/styles/utils.module.css'
import styles from '/styles/Home.module.css'



export default function Home() {
    return (
        <div>
            <Navbar/>
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p>
                        Hi everyone, my name is Matías and I'm a computer science student.
                        I love languages, especially french. I made this blog to teach you some spanish and practice my
                        french.
                        Alors, c'est parti !
                    </p>
                </section>
                <footer>
                    Read{' '}
                    <Link href="/about">
                        <a>more about me!</a>
                    </Link>
                </footer>
            </Layout>
        </div>
    )
}