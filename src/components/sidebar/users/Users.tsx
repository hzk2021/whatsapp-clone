import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { MdMessage } from "react-icons/md"

function Users() {

    const [users, setUsers] = useState<DocumentData[]>();

    useEffect(() => {

        async function getMembers() {
            const usersCollection = await getDocs(collection(db, "users"));

            const userData: DocumentData[] = [];

            usersCollection.forEach(collection => userData.push(collection.data()));

            setUsers(userData);
        }

        getMembers();

    }, [])

    return (
        <ul>
            {users ?
                users.map((u) =>

                    <li className="flex place-items-center gap-3 border-b border-solid pb-1 mb-3 box-border h-[40px]"
                        key={u.uid}>
                        <img src={u.photoURL} className="w-[50px]" />
                        <span>{u.displayName}</span>
                        {/* <span>{u.uid}</span> */}
                        <MdMessage className="ml-auto" size={20} />
                    </li>)

                : null
            }
        </ul>
    )
}

export default Users