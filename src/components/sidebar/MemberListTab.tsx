import React from 'react'

interface memberListTabProps {
    photoURL: string,
    displayName: string,
    uid: string
}

function MemberListTab(props: memberListTabProps) {
    return (
        <div className='flex place-items-center gap-3 border-b-2 border-solid pb-2 px-3 pt-5'>
            <img src={props.photoURL} className="w-[45px] h-[45px] rounded-3xl" />
            <p>{props.displayName}</p>
        </div>
    )
}

export default MemberListTab