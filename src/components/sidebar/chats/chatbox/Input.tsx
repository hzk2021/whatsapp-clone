function Input() {
    return (
        <div className='input flex justify-between items-center gap-3 w-full p-3'>
            <input type='text' placeholder='Type something...' className='w-full h-10 p-2' ></input>
            <div className='send flex items-center gap-3'>
                <button className='rounded p-3 border bg-[#FFE5E5]'>Send</button>
            </div>
        </div>
    )
}

export default Input