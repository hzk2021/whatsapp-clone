import { FaMagnifyingGlass } from "react-icons/fa6"

function Searchbar() {
    return (
        <div className="flex p-2 m-2 gap-2 items-center bg-[#F3FDE8]">
            <label htmlFor="searchBox">
                <FaMagnifyingGlass size={18} />
            </label>
            <input type="text" placeholder='Search chat' className="flex-1 bg-[#F3FDE8] focus:outline-0" id="searchBox"></input>
        </div>
    )
}

export default Searchbar