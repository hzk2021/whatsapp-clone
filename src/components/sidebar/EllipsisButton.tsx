import { FaEllipsisVertical } from 'react-icons/fa6'
import { useState } from 'react'
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

function EllipsisButton() {

    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    async function logOut() {
        await auth.signOut();

        return navigate("/login", { state: "Logged out succcessfully!" });
    }

    return (
        <div>
            <FaEllipsisVertical size={40} className={`cursor-pointer rounded-3xl p-2 ${active && "bg-[#FFE5E5]"}`} onClick={() => setActive(!active)} />

            {
                active && <div className='absolute w-full shadow-xl rounded left-0 bg-[#F3FDE8] mt-2 text-center'>
                    <ul className='p-1'>
                        <li className='cursor-pointer hover:bg-[#FFE5E5]' onClick={logOut}>Log Out</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default EllipsisButton