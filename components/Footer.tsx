import React from 'react'

const Footer = () => {
    return (
        <footer className="flex text-md ">
            <p>© Ian Chen&thinsp;{new Date().getFullYear()}</p>
            <div className="flex-1" />
            <p>All rights reserved</p>
        </footer>
    )
}

export default Footer
