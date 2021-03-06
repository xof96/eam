import Image from 'next/image';
import Link from 'next/link'

import Layout from '/components/layout';
import Navbar from '/components/navbar'
import Date from '/components/date'

import utilStyles from '/styles/utils.module.css'

import {getSortedPostsData} from '/lib/posts'

const ProfileImage = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
)

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function About({allPostsData}) {

    return (
        <div>
            <Navbar/>
            <Layout>
                <h1>This is about me :)</h1>
                <ProfileImage/>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({id, date, title}) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br/>
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date}/>
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </Layout>
        </div>
    )
}