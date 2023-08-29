import { Dispatch, useContext, useReducer } from "react";
import { createContext } from "react"
import { AuthContext } from "./AuthContext";

interface ChatStateProps {
    chatId: string,
    userInfo: {
        displayName: string,
        photoURL: string,
        uid: string
    } | null
}

interface ChatContextProps {
    data: ChatStateProps,
    dispatch: Dispatch<ChatAction>
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

interface ChatAction {
    type: "CHANGE_USER",
    payload: any
}

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
    const currentUser = useContext(AuthContext);

    const INITIAL_STATE: ChatStateProps = {
        chatId: "null",
        userInfo: null
    }

    const chatReducer = (state: ChatStateProps, action: ChatAction): ChatStateProps => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    chatId: currentUser!.uid > action.payload.uid
                        ? currentUser!.uid + action.payload.uid
                        : action.payload.uid + currentUser!.uid
                    ,
                    userInfo: action.payload
                };

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    )
}


export { ChatContext, ChatContextProvider }