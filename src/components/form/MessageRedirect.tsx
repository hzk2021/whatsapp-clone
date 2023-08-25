import { Link } from "react-router-dom";

type messageProps = {
    text: string,
    toText: string,
    path: string,
}

function MessageRedirect(props: messageProps) {
    return (
        <p className="text-xs
                      text-grey">
            {props.text} <Link to={`${props.path}`}> <span className="underline underline-offset-4">{props.toText}</span></Link>
        </p>
    )
}

export default MessageRedirect