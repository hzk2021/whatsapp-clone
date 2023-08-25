import { FaPeopleGroup } from 'react-icons/fa6'
import { useState } from 'react'

function CommunityButton() {

    const [active, setActive] = useState(false);

    return (
        <FaPeopleGroup size={40} className={`cursor-pointer rounded-3xl p-2 ${active && "bg-gray-500"}`} onClick={() => setActive(!active)} />

    )
}

export default CommunityButton