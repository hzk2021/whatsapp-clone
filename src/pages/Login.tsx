import StyledInput from "../components/form/StyledInput";
import StyledName from "../components/form/StyledName";
import StyledSubmitButton from "../components/form/StyledSubmitButton";
import MessageRedirect from "../components/MessageRedirect";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useRef, useState } from "react";
import { auth } from "../config/firebase";
import whatsappIcon from "../assets/whatsapp.webp";


function Login() {

  const navigate = useNavigate();
  const { state } = useLocation();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");

  async function signInAccount(e: FormEvent) {
    e.preventDefault();

    if (!emailInput.current || !passwordInput.current) return;
    const email = emailInput.current.value;
    const password = passwordInput.current.value

    console.log(auth.currentUser);

    try {
      const signedIn = await signInWithEmailAndPassword(auth, email, password);
      if (!signedIn.user.emailVerified) {
        throw new Error("verification_error")
      }

      return navigate("/");

    } catch (error: any) {
      // console.error(error);

      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found" || error === "verification_error") {
        await auth.signOut()
        setError("Account not found, wrong password, or unverified email address");
      }

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

      {state && <p className="absolute top-10 bg-[#ffbfbf] p-2 w-2/5"> {state} </p>}
      {error && <p className="absolute top-10 bg-[#ffbfbf] p-2 w-2/5"> {error} </p>}

      <div className="flex
                      justify-center
                      items-center
                      w-96
                      h-96
                      rounded
                      shadow-md
                      bg-[#F3FDE8]">

        <div className="form-wrapper flex flex-col h-full gap-2 p-8 w-full">
          <StyledName text="WhatsApp Clone" classes="app-name" imgsrc={whatsappIcon} />
          <StyledName text="Login" classes="title" className="text-base" />

          <form className="flex flex-col justify-evenly h-full" onSubmit={signInAccount}>
            <StyledInput type="email" placeholder="Email" innerref={emailInput} required />
            <StyledInput type="password" placeholder="Password" innerref={passwordInput} required />

            <StyledSubmitButton text="Sign In" />
          </form>

          <MessageRedirect text="You do not have an account?" toText="Register" path="/register" />

        </div>
      </div>
    </section>
  );
}

export default Login;
