import { useEffect, useState, useContext } from 'react'
import * as React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HomeMiddle from '../components/HomeComponent/HomeMiddle'
import HomeBottom from '../components/HomeComponent/HomeBottom'
import axios from 'axios'
import { AuthContext } from '../helpers/AuthContext'
import { useHistory } from 'react-router-dom'
function Home() {
    const { setSwitchNavbar } = useContext(AuthContext)
    const history = useHistory()
    history.listen(() => {
        setSwitchNavbar(
            window.location.pathname === '/login' || window.location.pathname === '/register')
    })

    return (
        <div>
            <HomeMiddle />
            <HomeBottom />
        </div>
    )
}

export default Home