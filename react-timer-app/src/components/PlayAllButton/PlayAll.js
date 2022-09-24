import { Button } from "@material-ui/core";
import { useState } from "react";

export default function PlayAll(props) {
    const [disableButton, setdisableButton] = useState(false)
    return (
        <>
            <Button
                onClick={() => {
                 setdisableButton(true);

    
                }}
                disabled= {disableButton}
                variant="contained" color="success">Play All</Button>
        </>
    )
}