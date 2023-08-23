import StyledInput from "../components/form/StyledInput";
import StyledName from "../components/form/StyledName";
import StyledSubmitButton from "../components/form/StyledSubmitButton";
import MessageRedirect from "../components/MessageRedirect";

function Login() {

  return (
    <section className="text-center
                        min-h-screen
                        flex 
                        flex-col
                        justify-center 
                        items-center
                        bg-[#A8DF8E]
                        gap-2">

      <div className="flex
                      justify-center
                      items-center
                      w-96
                      h-96
                      rounded
                      shadow-md
                      bg-[#F3FDE8]">

        <div className="form-wrapper flex flex-col h-full gap-2 p-8 w-full">
          <StyledName text="WhatsApp Clone" classes="app-name" />
          <StyledName text="Login" classes="title" className="text-base" />

          <form className="flex flex-col justify-evenly h-full">
            <StyledInput type="email" placeholder="Email" />
            <StyledInput type="password" placeholder="Password" />


            <StyledSubmitButton text="Sign In" />
          </form>

          <MessageRedirect text="You do not have an account?" toText="Register" path="/register" />

        </div>
      </div>
    </section>
  );
}

export default Login;
