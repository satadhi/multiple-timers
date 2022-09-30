import { Button } from "@material-ui/core";
import { useState } from "react";

export default function PlayAll(props) {
    const { timerList } = props;
    const [disableButton, setdisableButton] = useState(false)
    return (
        <>
            <Button
                onClick={() => {
                    setdisableButton(true);
                        const el = document.getElementById("button_" + timerList[0].id);
                        el.click();

                    // setdisableButton(false)

                }}
                disabled={disableButton} id="play-all-button"
                variant="contained" color="success">Play All</Button>
        </>
    )
}