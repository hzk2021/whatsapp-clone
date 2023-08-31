import { collection, doc, DocumentData, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { MdMessage } from "react-icons/md"
import { AuthContext } from "../../../contexts/AuthContext";
import { ChatContext } from "../../../contexts/ChatContext";

function Users() {

    const [users, setUsers] = useState<DocumentData[]>();
    const currentUser = useContext(AuthContext);

    const chatContext = useContext(ChatContext);

    useEffect(() => {

        async function getMembers() {
            const usersCollection = await getDocs(collection(db, "users"));

            const userData: DocumentData[] = [];

            usersCollection.forEach(collection => userData.push(collection.data()));

            setUsers(userData);
        }

        getMembers();

    }, [])

    async function handleSelect(userID: string, userDisplayName: string, userPhotoURL: string) {
        // check whether the conversation exists, if not create one

        const combinedUsersIds = currentUser!.uid > userID ? currentUser!.uid + userID : userID + currentUser!.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedUsersIds));

            if (!res.exists()) {

                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedUsersIds), { messages: [] });

                // create user chats
                await updateDoc(doc(db, "userChats", currentUser!.uid), {
                    [combinedUsersIds + ".userInfo"]: {
                        uid: userID,
                        displayName: userDisplayName,
                        photoURL: userPhotoURL
                    },
                    [combinedUsersIds + ".date"]: serverTimestamp()
                })

                await updateDoc(doc(db, "userChats", userID), {
                    [combinedUsersIds + ".userInfo"]: {
                        uid: currentUser!.uid,
                        displayName: currentUser!.displayName,
                        photoURL: currentUser!.photoURL
                    },
                    [combinedUsersIds + ".date"]: serverTimestamp()
                })
            }

            chatContext?.dispatch({
                type: "CHANGE_USER",
                payload: {
                    uid: userID,
                    displayName: userDisplayName,
                    photoURL: userPhotoURL
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ul>
            {users ?
                users.map((u) =>

                    currentUser!.uid !== u.uid &&

                    <li className="flex items-center sm:place-items-center gap-3 border-b border-solid border-gray-500 pb-1 mb-3 box-border"
                        key={u.uid}>
                        <img src={u.photoURL} className="w-8 sm:w-12 h-full rounded-3xl" />
                        <span>{u.displayName}</span>
                        {/* <span>{u.uid}</span> */}
                        <MdMessage className="ml-auto cursor-pointer" size={20} onClick={() => handleSelect(u.uid, u.displayName, u.photoURL)} />
                    </li>)

                : null
            }
        </ul>
    )
}

export default Users