import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import StyledInput from "../components/form/StyledInput";
import StyledName from "../components/form/StyledName";
import StyledSubmitButton from "../components/form/StyledSubmitButton";
import MessageRedirect from "../components//form/MessageRedirect";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import whatsappIcon from "../assets/whatsapp.webp";

function Register() {

    const navigate = useNavigate();

    const displayNameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const imageInput = useRef<HTMLInputElement>(null);

    const [error, setError] = useState("");

    async function createAccount(e: FormEvent) {
        e.preventDefault();

        if (!displayNameInput.current || !emailInput.current || !passwordInput.current || !imageInput.current) return;
        const displayName = displayNameInput.current.value;
        const email = emailInput.current.value;
        const password = passwordInput.current.value
        const image = imageInput.current.files!.item(0)!;

        try {
            const createUser = await createUserWithEmailAndPassword(auth, email, password);

            if (!createUser) {
                throw new Error(`Could not create user ${createUser}`)
            }

            const storageRef = ref(storage, createUser.user.uid);


            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    setError(error.message);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(createUser.user, {
                            displayName,
                            photoURL: downloadURL
                        })

                        await setDoc(doc(db, "users", createUser.user.uid), {
                            uid: createUser.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        })
                    });
                }
            );

            await sendEmailVerification(createUser.user);

            return navigate("/login", { state: "A verification link has been sent to your email address" });

        } catch (error: any) {
            console.error(error);
            setError(error.code);
        }
    }

    return (
        <section className="text-center
                        min-h-screen
                        flex 
                        flex-col
                        justify-center 
                        items-center
                        bg-[#A8DF8E]
                        gap-2">

            {error && <p className="absolute top-10 bg-[#ffbfbf] p-2 w-2/5"> {error} </p>}

            <div className="flex
                      justify-center
                      items-center
                      w-64
                      xs:w-72
                      md:w-96
                      rounded
                      shadow-md
                      bg-[#F3FDE8]">

                <div className="form-wrapper flex flex-col h-full gap-2 p-8 w-full">
                    <StyledName text="WhatsApp Clone" classes="app-name text-sm md:text-xl" imgsrc={whatsappIcon} />
                    <StyledName text="Register" classes="title" className="text-xs md:text-base" />

                    <form className="flex flex-col justify-evenly h-full gap-4" onSubmit={createAccount}>
                        <StyledInput type="text" placeholder="Display Name" innerref={displayNameInput} required />
                        <StyledInput type="email" placeholder="Email" innerref={emailInput} required />
                        <StyledInput type="password" placeholder="Password" innerref={passwordInput} required />

                        <StyledInput type="file" id="files" innerref={imageInput} required accept="image/png, image/jpeg" />

                        <StyledSubmitButton text="Sign Up" />
                    </form>

                    <MessageRedirect text="You already have an account?" toText="Login" path="/login" />

                </div>
            </div>

        </section>
    );
}

export default Register;
