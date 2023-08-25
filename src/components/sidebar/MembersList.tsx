import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import MemberListTab from "./MemberListTab";

function MembersList() {

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
        <div>
            {users ? users.map((u) => <MemberListTab key={u.uid} photoURL={u.photoURL} displayName={u.displayName} uid={u.uid} />)
                :
                null


            }
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
            <MemberListTab key={4} photoURL={"https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"} displayName={'fuud'} uid={'1'} />
        </div>
    )
}

export default MembersList