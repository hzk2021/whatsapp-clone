import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import EllipsisButton from './EllipsisButton';
import CommunityButton from './CommunityButton';

function Navbar() {

    const user = useContext(AuthContext);

    return (
        <div className='flex items-center justify-between p-2 px-3'>
            <img src={user ? user.photoURL! : "https://placehold.co/500x500.png"} className="w-[45px] h-[45px] rounded-3xl select-none" />

            <div className='function-icons flex gap-2 relative'>
                <CommunityButton />
                <EllipsisButton />
            </div>
        </div>
    )
}

export default Navbar