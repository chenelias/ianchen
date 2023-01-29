import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import PodcastSpotify from '../components/PodcastSpotify'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
    const scrollPodcast = () => {
        const element = document.getElementById('podcast-aria')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const scrollAbout = () => {
        const element = document.getElementById('about-aria')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <main className="snap-y snap-proximity" id="index">
            <Head>
                <title>Booster Shot - Ian Chen</title>
            </Head>
            <div className="h-[100vh] bg-orange-400 justify-center flex items-center snap-center ">
                <div className="!block">
                    <h1 className="text-7xl font-extrabold font-fatface">Ian Chen</h1>
                    <ul className="text-center mt-7">
                        <button onClick={scrollPodcast} className="inline-flex text-2xl group">
                            <p className="group-hover:flex hidden font-bold duration-100">-</p>&thinsp;Podcast&thinsp;
                            <p className="group-hover:flex hidden font-bold duration-100">-</p>
                        </button>
                        <br />
                        <button onClick={scrollAbout} className="inline-flex text-2xl group  mt-2">
                            <p className="group-hover:flex hidden font-bold duration-100">-</p>&thinsp;About Me&thinsp;
                            <p className="group-hover:flex hidden font-bold duration-100">-</p>
                        </button>
                    </ul>
                </div>
            </div>
            <PodcastSpotify />
            <About />
            <Footer />
        </main>
    )
}

export default Home
