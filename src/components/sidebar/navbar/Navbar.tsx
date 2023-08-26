import React, { useState } from 'react'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../config/firebase';
import UsersSection from '../users/UsersSection';

function Navbar() {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('');

    async function logOut() {
        await auth.signOut();

        return navigate("/login", { state: "Logged out succcessfully!" });
    }

    return (
        <>
            <div className='navbar flex items-center p-2 w-full'>
                <img src="https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"
                    className="w-[50px] h-[50px] rounded-3xl bg-white p-1" />

                <ol className='box-content flex ml-auto gap-5 relative'>
                    <li className={`cursor-pointer rounded-3xl p-1 ${(activeTab === 'usersList') && 'bg-white'}`}>
                        <FaPeopleGroup size={25} onClick={() => activeTab === 'usersList' ? setActiveTab('') : setActiveTab('usersList')} />
                    </li>
                    <li className={`cursor-pointer rounded-3xl p-1 ${(activeTab === 'moreOptions') && 'bg-white'}`}>
                        <FaEllipsisVertical size={25} onClick={() => activeTab === 'moreOptions' ? setActiveTab('') : setActiveTab('moreOptions')} />
                    </li>

                    {
                        (activeTab === 'moreOptions') &&
                        <div className='absolute w-full shadow-xl rounded right-0 bottom-[-30px] bg-[#F3FDE8] text-center'>
                            <ul className='p-1'>
                                <li className='cursor-pointer hover:bg-[#FFE5E5]' onClick={logOut}>Log Out</li>
                            </ul>
                        </div>
                    }
                </ol>
            </div>

            {(activeTab === 'usersList') &&
                <UsersSection backAction={() => setActiveTab("")} />
            }
        </>
    )
}

export default Navbar