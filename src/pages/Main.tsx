import Sidebar from '../components/sidebar/Sidebar'


function Main() {
    return (
        <div className='main-wrapper h-screen flex'>
            <div className='flex w-full h-[100%] m-auto shadow-2xl bg-[#A8DF8E] xl:w-11/12 xl:h-[95%]'>

                <div className='outline w-[35%] lg:w-[25%] relative flex flex-col'>
                    <Sidebar />
                </div>

                {/* <div className='w-[75%]'>chat</div> */}

            </div>
        </div>
    )
}

export default Main