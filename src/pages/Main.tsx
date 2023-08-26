
import Chatbox from '../components/sidebar/chats/chatbox/Chatbox'
import Sidebar from '../components/sidebar/Sidebar'


function Main() {

    return (
        <div className='main-wrapper h-screen flex bg-[#A8DF8E] text-xs sm:text-sm md:text-base min-w-[500px] min-h-screen'>
            <div className='flex w-full h-[100%] m-auto shadow-2xl bg-[#F3FDE8] xl:w-11/12 xl:h-[95%]'>


                <div className={`w-[35%] md:w-[30%] lg:w-[25%] relative flex flex-col`}>
                    <Sidebar />
                </div>

                <div className='w-[65%] md:w-[70%] lg:w-[75%]'>
                    <Chatbox />
                </div>

            </div>
        </div>
    )
}

export default Main