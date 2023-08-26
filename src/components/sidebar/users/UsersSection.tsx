import { FaArrowLeft } from 'react-icons/fa'
import Users from './Users'

type usersSectionProps = {
    backAction: () => void
}

function UsersSection(props: usersSectionProps) {
    return (
        <div className='absolute top-0 left-0 h-full w-full bg-[#F3FDE8] z-[2] flex flex-col'>

            <div className='top flex p-3 gap-3 items-center mt-2'>
                <FaArrowLeft className='cursor-pointer' onClick={props.backAction} />
                <h1 className='font-bold text-sm sm:text-lg'>Community</h1>
            </div>

            <div className='users-list p-3 overflow-y-scroll grow'>
                <Users />

            </div>

        </div>
    )
}

export default UsersSection