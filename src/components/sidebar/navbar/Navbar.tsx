import React, { useContext, useState } from 'react'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../config/firebase';
import { AuthContext } from '../../../contexts/AuthContext';
import UsersSection from '../users/UsersSection';

function Navbar() {

    const currentUser = useContext(AuthContext);

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('');

    async function logOut() {
        await auth.signOut();

        return navigate("/login", { state: "Logged out succcessfully!" });
    }

    return (
        <>
            <div className='navbar flex items-center p-2 w-full border-b border-solid border-gray-500'>
                <img src={currentUser!.photoURL!}
                    className="w-[0px] h-[50px] rounded-3xl p-[1px] sm:w-[50px] sm:bg-[#FFE5E5]" />

                <ol className='flex mx-auto gap-5 relative sm:mx-0 sm:ml-auto'>
                    <li className={`cursor-pointer rounded-3xl p-1 ${(activeTab === 'usersList') && 'bg-[#FFE5E5]'}`}>
                        <FaPeopleGroup size={25} onClick={() => activeTab === 'usersList' ? setActiveTab('') : setActiveTab('usersList')} />
                    </li>
                    <li className={`cursor-pointer rounded-3xl p-1 ${(activeTab === 'moreOptions') && 'bg-[#FFE5E5]'}`}>
                        <FaEllipsisVertical size={25} onClick={() => activeTab === 'moreOptions' ? setActiveTab('') : setActiveTab('moreOptions')} />
                    </li>

                    {
                        (activeTab === 'moreOptions') &&
                        <div className='absolute w-full shadow-xl rounded right-0 bottom-[-30px] bg-[#A8DF8E] text-center'>
                            <ul className='p-1'>
                                <li className='cursor-pointer' onClick={logOut}>Log Out</li>
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