import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import PodcastSpotify from '../components/PodcastSpotify'

const Home = () => {
    return (
        <main className="snap-y snap-proximity" id="index">
            <Head>
                <title>Ian Chen</title>
            </Head>
            <div className="h-[100vh] bg-orange-400 justify-center flex items-center snap-center ">
                <div className="!block">
                    <h1 className="text-7xl font-extrabold font-fatface">Ian Chen</h1>
                    <p className="text-2xl">Podcast</p>
                </div>
            </div>
            <div
                className="h-[100vh] flex-wrap justify-center items-center  bg-orange-400 flex mx-auto snap-center "
                id="podcast-aria"
            >
                <div className="max-w-3xl mx-auto block p-5">
                    <div className="mx-auto">
                        <p className="text-6xl font-extrabold font-fatface mb-[70px] text-center ">Podcast</p>
                    </div>
                    <div className="justify-center items-center flex">
                        <PodcastSpotify />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
