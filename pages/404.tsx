import React from 'react'
import Link from 'next/link'
const ErrorPage = () => {
    return (
        <div className="text-4xl h-[100vh] items-center flex justify-center font-bold">
            <div className="!block text-center">
                <p>404 page not found</p>
                <Link href="/" className="text-2xl hover:underline">
                    - Home -
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
