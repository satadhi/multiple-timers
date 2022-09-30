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
                    timerList.forEach(timer => {
                        const el = document.getElementById("button_" + timer.id);
                        el.click();
                    })
                    setdisableButton(false)

                }}
                disabled={disableButton}
                variant="contained" color="success">Play All</Button>
        </>
    )
}