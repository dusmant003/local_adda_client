import React from 'react'
import TopBar from '../../common/TopBar'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { Outlet } from 'react-router-dom'



const LayOut = () => {
    return (
        <>
            <TopBar />
            <Header />
            <main>

                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default LayOut