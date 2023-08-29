import Message from './Message'

function Conversation() {

    return (
        <div className='conversation overflow-y-scroll grow p-4 m-4 flex flex-col gap-3'>
            <Message owner={false} />
            <Message owner={true} />
            <Message owner={true} />
            <Message owner={true} />
            <Message owner={false} />
            <Message owner={true} />
            <Message owner={false} />
            <Message owner={true} />
            <Message owner={true} />

        </div>
    )
}

export default Conversation