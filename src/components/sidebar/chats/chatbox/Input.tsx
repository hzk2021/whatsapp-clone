import { AiOutlinePaperClip } from 'react-icons/ai';
import { BiImageAdd } from 'react-icons/bi';

function Input() {
    return (
        <div className='input flex justify-between items-center gap-3 w-full'>
            <input type='text' placeholder='Type something...' className='w-full h-20 p-2' ></input>
            <div className='send flex items-center gap-3'>
                <AiOutlinePaperClip size={25} />
                <input type="file" className='hidden' id="file" />

                <label htmlFor="file">
                    <BiImageAdd size={25} />
                </label>

                <button className='rounded p-3 border bg-[#FFE5E5]'>Send</button>
            </div>
        </div>
    )
}

export default Input