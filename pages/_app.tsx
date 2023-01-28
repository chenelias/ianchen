import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="mx-auto bg-orange-400">
            <Header />
            <Component {...pageProps} />
            {/* <div className="max-w-4xl mx-auto ">
                <Footer />
            </div> */}
        </main>
    )
}

export default MyApp
