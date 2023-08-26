
import Chatbox from '../components/sidebar/chats/chatbox/Chatbox'
import Sidebar from '../components/sidebar/Sidebar'


function Main() {

    return (
        <div className='main-wrapper h-screen flex min-w-[1025px] min-h-[100dvh]'>
            <div className='flex w-full h-[100%] m-auto shadow-2xl bg-[#A8DF8E] xl:w-11/12 xl:h-[95%]'>


                <div className={`w-[35%] lg:w-[25%] relative flex flex-col`}>
                    <Sidebar />
                </div>

                <div className=' w-[75%]'>
                    <Chatbox />
                </div>

            </div>
        </div>
    )
}

export default Main