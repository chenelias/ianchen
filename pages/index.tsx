import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import PodcastSpotify from '../components/PodcastSpotify'

const Home = () => {
    return (
        <main className="snap-y snap-proximity" id="index">
            <Head>
                <title>IanChen</title>
            </Head>
            <div className="h-[100vh] bg-orange-400 justify-center flex items-center snap-center ">
                <div className="!block">
                    <h1 className="text-7xl font-extrabold font-fatface">Ian Chen</h1>
                    <p className="text-2xl">Podcast</p>
                </div>
            </div>
          
                <PodcastSpotify />
        </main>
    )
}

export default Home
