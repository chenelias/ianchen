const About = () => {
    return (
        <div
            className="h-[100vh] flex-wrap justify-center items-center  bg-orange-400 flex mx-auto snap-center "
            id="about-aria"
        >
            <div className="block">
                <div className="max-w-3xl mx-auto block p-5">
                    <div className="mx-auto">
                        <p className="text-6xl font-extrabold font-fatface mb-[40px] text-center ">About Me</p>
                    </div>
                    <div className="justify-center items-center flex">
                        <p className="text-lg">
                            As a high student who is interested in storytelling and medicine from Taiwan, I want to
                            share the stories about interesting story with popular medical science with my podcast.
                        </p>
                    </div>
                    <p className="text-3xl text-right mt-5" id="write">
                        Ian Chen
                    </p>
                </div>
                <div className="mt-5 text-md text-center">
                    <p>© Ian Chen&nbsp;{new Date().getFullYear()} All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default About
