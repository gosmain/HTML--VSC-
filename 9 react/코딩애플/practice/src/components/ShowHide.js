import { useState } from "react";
import Hello from "./Hello";

function ShowHide() {
    const [showing, setShowing] = useState(0);
    const onClick = () => setShowing((prev) => !prev);
    return(
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}

export default ShowHide;