import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const PodcastSpotify = () => {
    const clientId = '37eda16d8b0b4f44907b58e671802523'
    const clientSecret = '8637a9f7a2274aaaac4699182f819248'
    const [tokenkey, settokenkey] = useState(null)
    const [spotifydata, setspotifydata] = useState(null)
    const [playerdisplay, setplayerdisplay] = useState(false)
    const [playlist, setplaylist] = useState(null)
    const [loading, setLoading] = useState(true)
    const [load, setload] = useState(true)
    const ref = React.useRef(null)
    useEffect(() => {
        async function fetchtokenkey() {
            var authParameters = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
            }
            setLoading(true)
            fetch('https://accounts.spotify.com/api/token', authParameters)
                .then((result) => result.json())
                .then((data) => {
                    setLoading(false)
                    !data || loading ? settokenkey(data.access_token) : ''
                    console.log(data)
                })
        }
        fetchtokenkey()
    }, [])
    function smoothingdown() {
        setplayerdisplay(true)
        setTimeout(scrolldown, 100)
    }
    function scrolldown() {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
        async function fetchToken() {
            setload(true)
            var showParameters = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + tokenkey,
                },
            }

            fetch('https://api.spotify.com/v1/shows/1HIq0d9AZ5KmCp1ZaMsbGs?market=ES', showParameters)
                .then((response) => response.json())
                .then((data) => {
                    setload(false)
                    !data || load
                        ? setspotifydata(
                              <div>
                                  <div className="xs:flex block mx-7 items-center group">
                                      {/* <img
                                          src={data.images[0].url}
                                          className="rounded-lg drop-shadow-xl group-hover:drop-shadow-2xl duration-200 xs:h-[270px] h-[200px] w-auto block xs:hidden mb-4"
                                          alt="show image"
                                      /> */}
                                      <div className="block mr-7">
                                          <h1 className="font-fatface text-5xl">Booster Shot</h1>
                                          <p className="font-bold">2&thinsp;/&thinsp;Episodes</p>
                                          <p className="font-fatface text-lg mt-1">
                                              As a high student who is interested in storytelling and medicine from
                                              Taiwan, this podcast covers all interesting story with popular medical
                                              science. So, if you're just like me, tune in Booster Shot!
                                          </p>
                                          <button
                                              onClick={() => {
                                                  smoothingdown()
                                              }}
                                              className="border-[2px] border-black hover:drop-shadow-lg px-2 py-1 mt-2 text-xl hover:bg-[#000] hover:border-[#000] drop-shadow-sm hover:text-white duration-100  font-light  rounded-md "
                                          >
                                              Learn more
                                          </button>
                                      </div>
                                      <div className="flex-1"></div>
                                      <img
                                          src={'https://i.scdn.co/image/ab6765630000ba8aa2f397e5684a6891d4cf8d5e'}
                                          className="rounded-lg drop-shadow-xl group-hover:drop-shadow-2xl duration-200 xs:h-[270px] h-[200px] w-auto hidden xs:flex"
                                          alt="show image"
                                      />
                                  </div>
                              </div>
                          )
                        : ''
                    // ---------------------------
                    !data || load
                        ? setplaylist(
                              <div>
                                  <div className="xs:block block mx-2 items-center max-w-3xl ">
                                      <h1 className="font-bold text-3xl text-center">All episodes of {data.name}</h1>
                                      <ul className="rounded-lg p-4  overflow-scroll max-h-[65vh] mt-5">
                                          {data.episodes.items.map((data) => (
                                              <Link
                                                  href={data.external_urls.spotify}
                                                  key={data.id}
                                                  className="items-center flex my-4 hover:drop-shadow-2xl "
                                              >
                                                  <div className="block">
                                                      <h1 className="text-xl font-bold">{data.name}</h1>
                                                      {/* <p className="mt-2">{data.description}</p> */}
                                                      <p className="mt-2">{data.release_date}</p>
                                                  </div>
                                                  <div className="flex-1" />
                                              </Link>
                                          ))}
                                      </ul>
                                  </div>
                              </div>
                          )
                        : ''
                })
        }
        fetchToken()
    }, [])
    return (
        <div>
            <div
                className="h-[100vh] flex-wrap justify-center items-center  bg-orange-400 flex mx-auto snap-center "
                id="podcast-aria"
            >
                <div className="max-w-3xl mx-auto block p-5">
                    <div className="mx-auto">
                        <p className="text-6xl font-extrabold font-fatface mb-[70px] text-center ">Podcast</p>
                    </div>
                    <div className="justify-center items-center flex">{spotifydata && spotifydata}</div>
                </div>
            </div>
            <div
                ref={ref}
                className={`h-[100vh] flex-wrap justify-center items-center  bg-orange-400 ${
                    playerdisplay ? 'flex' : 'hidden'
                } mx-auto snap-center `}
            >
                {playlist}
            </div>
        </div>
    )
}

export default PodcastSpotify
