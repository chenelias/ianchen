import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Credentials } from './Credentials'
import axios from 'axios'
const PodcastSpotify = () => {
    const spotify = Credentials()
    const [token, setToken] = useState('')
    const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] })
    const [podcastdata, setpodcastdata] = useState(null)

    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret),
            },
            data: 'grant_type=client_credentials',
            method: 'POST',
        }).then((tokenResponse) => {
            setToken(tokenResponse.data.access_token)
            axios('https://api.spotify.com/v1/shows/1HIq0d9AZ5KmCp1ZaMsbGs?market=ES', {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + tokenResponse.data.access_token },
            }).then((genreResponse) => {
                console.log(genreResponse.data)
                setpodcastdata(genreResponse.data)
            })
        })
    }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret])
    return (
            <div
                className="h-[100vh] flex-wrap justify-center items-center  bg-orange-400 flex mx-auto snap-center "
                id="podcast-aria"
            >
                <div className="max-w-3xl mx-auto block p-5">
                    <div className="mx-auto">
                        <p className="text-6xl font-extrabold font-fatface xs:mb-[50px] mb-[20px] text-center ">Podcast</p>
                    </div>
                    <div className="justify-center items-center flex">
                        {podcastdata ? (
                            <div>
                                <div className="xs:flex block mx-7 items-center group">
                                    <img
                                        src={podcastdata.images[0].url}
                                        className="rounded-lg drop-shadow-xl group-hover:drop-shadow-2xl duration-200 xs:h-[270px] h-[200px] w-auto block xs:hidden mb-4"
                                        alt="show image"
                                    />
                                    <div className="block mr-7">
                                        <h1 className="font-fatface text-5xl">{podcastdata.name}</h1>
                                        <p className="font-bold">
                                            {podcastdata.total_episodes}&thinsp;/&thinsp;Episodes
                                        </p>
                                        <p className="font-fatface text-lg mt-1 mb-[15px]">{podcastdata.description}</p>
                                        <Link
                                            href={podcastdata.external_urls.spotify}
                                            className="border-[2px] border-black hover:drop-shadow-lg px-2 py-1 text-xl hover:bg-[#000] hover:border-[#000] drop-shadow-sm hover:text-white duration-100  font-light  rounded-md "
                                        >
                                            Listen on Spotify
                                        </Link>
                                    </div>
                                    <div className="flex-1"></div>
                                    <img
                                        src={podcastdata.images[0].url}
                                        className="rounded-lg drop-shadow-xl group-hover:drop-shadow-2xl duration-200 xs:h-[270px] h-[200px] w-auto hidden xs:flex"
                                        alt="show image"
                                    />
                                </div>
                            </div>
                        ) : (
                            'Loading...'
                        )}
                    </div>
                </div>
            </div>
    )
}

export default PodcastSpotify
