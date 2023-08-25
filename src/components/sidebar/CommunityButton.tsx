import { FaPeopleGroup } from 'react-icons/fa6'
import { useState } from 'react'

function CommunityButton() {

    const [active, setActive] = useState(false);

    return (
        <div>
            <FaPeopleGroup size={40} className={`cursor-pointer rounded-3xl p-2 ${active && "bg-[#FFE5E5]"}`} onClick={() => setActive(!active)} />
            {
                active && <div className='absolute w-full shadow-xl rounded left-0 top-0 h-full bg-[#F3FDE8] text-center' onClick={() => setActive(false)}> ShEESH</div>
            }
        </div>
    )
}

export default CommunityButton