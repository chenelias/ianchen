// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// const PodcastSpotify = () => {
//     const clientId = '37eda16d8b0b4f44907b58e671802523'
//     const clientSecret = '8637a9f7a2274aaaac4699182f819248'
//     const [tokenkey, settokenkey] = useState(null)
//     const [spotifydata, setspotifydata] = useState(null)
//     const [playerdisplay, setplayerdisplay] = useState(false)

//     useEffect(() => {
//         var authParameters = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
//         }
//         fetch('https://accounts.spotify.com/api/token', authParameters)
//             .then((result) => result.json())
//             .then((data) => {
//                 settokenkey(data.access_token)
//             })
//     }, [])
//     async function fetchToken() {
//         var showParameters = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: 'Bearer ' + tokenkey,
//             },
//         }
//         fetch('https://api.spotify.com/v1/shows/1HIq0d9AZ5KmCp1ZaMsbGs?market=ES', showParameters)
//             .then((response) => response.json())
//             .then((data) => {
//                 setspotifydata(data)
//                 console.log(spotifydata)
//             })
//     }
//     useEffect(() => {
//         fetchToken()
//     }, [])
//     return (
//         <div>
//             {spotifydata ? (
//                 <div className="xs:flex block mx-7 items-center group">
//                     <img
//                         src={spotifydata && spotifydata.images[0].url}
//                         className="rounded-lg drop-shadow-xl group-hover:drop-shadow-2xl duration-200 xs:h-[270px] h-[200px] w-auto block xs:hidden mb-4"
//                         alt="show image"
//                     />
//                     <div className="block mr-7">
//                         <h1 className="font-fatface text-5xl">{spotifydata && spotifydata.name}</h1>
//                         <p className="font-bold">
//                             {spotifydata && spotifydata.total_episodes}&thinsp;/&thinsp;Episodes
//                         </p>
//                         <p className="font-fatface text-lg mt-1">{spotifydata && spotifydata.description}</p>
//                         <button
//                             onClick={() => setplayerdisplay(true)}
//                             className="border-[2px] border-black hover:drop-shadow-lg px-2 py-1 mt-2 text-xl hover:bg-[#000] hover:border-[#000] drop-shadow-sm hover:text-white duration-100  font-light  rounded-md "
//                         >
//                             Listen
//                         </button>
//                     </div>
//                     <div className="flex-1"></div>
//                     <img
//                         src={spotifydata && spotifydata.images[0].url}
//                         className="rounded-lg drop-shadow-xl group-hover:drop-shadow-2xl duration-200 xs:h-[270px] h-[200px] w-auto hidden xs:flex"
//                         alt="show image"
//                     />
//                     {/* <Link className='text-xl mt-2' href={spotifydata.external_urls.spotify}>Listen on Spotify</Link> */}
//                 </div>
//             ) : (
//                 'Loading ...'
//             )}
//         </div>
//     )
// }

// export default PodcastSpotify
