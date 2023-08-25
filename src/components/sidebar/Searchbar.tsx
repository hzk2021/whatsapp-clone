import { FaMagnifyingGlass } from "react-icons/fa6"

function Searchbar() {
    return (
        <div>
            <FaMagnifyingGlass />
            <input type="text" placeholder='Search chat'></input>
        </div>
    )
}

export default Searchbar