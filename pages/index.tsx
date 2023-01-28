import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
    return (
        <main>
            <Head>
                <title>Home - Ian Chen</title>
            </Head>
            <div className="h-[100vh] bg-orange-400 justify-center flex items-center">
                <div className="!block">
                    <h1 className="text-7xl font-extrabold font-fatface">Ian Chen</h1>
                    <p className="text-lg font-bold">Podcast</p>
                </div>
            </div>
            <div className="h-[100vh] bg-orange-500 flex" id="podcast-aria">
                <p className="text-5xl font-extrabold font-fatface m-6">Podcast</p>
                <div></div>
            </div>
        </main>
    )
}

export default Home
