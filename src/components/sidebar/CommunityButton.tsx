import { FaPeopleGroup } from 'react-icons/fa6'
import { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import MembersList from './MembersList';

function CommunityButton() {

    const [active, setActive] = useState(false);

    return (
        <div>
            <FaPeopleGroup size={40} className={`cursor-pointer rounded-3xl p-2 ${active && "bg-[#FFE5E5]"}`} onClick={() => setActive(!active)} />
            {
                active &&
                <div className='absolute w-full shadow-xl rounded left-0 top-0 h-full bg-[#F3FDE8] overflow-y-scroll'>
                    <div className='community-header flex gap-3 items-center mb-10 mx-3 mt-5'>
                        <AiOutlineArrowLeft onClick={() => setActive(false)} size={30} className="cursor-pointer" />
                        <h1 className='font-bold text-xl'>Communities</h1>
                    </div>
                    <MembersList />
                </div>
            }
        </div>
    )
}

export default CommunityButton