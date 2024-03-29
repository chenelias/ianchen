import React from 'react'

const Footer = () => {
    return (
        <footer className="flex text-md py-4 px-1 ">
            <p>© Ian Chen&nbsp;{new Date().getFullYear()}</p>
            <div className="flex-1" />
            <p>All rights reserved</p>
        </footer>
    )
}

export default Footer
