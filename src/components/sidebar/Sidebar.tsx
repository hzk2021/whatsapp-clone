import React from 'react'
import ActiveChats from './chats/ActiveChats'
import Navbar from './navbar/Navbar'
// import Searchbar from './Searchbar'

function Sidebar() {
    return (
        <>
            <Navbar />
            {/* <Searchbar /> */}
            <ActiveChats />
        </>
    )
}

export default Sidebar