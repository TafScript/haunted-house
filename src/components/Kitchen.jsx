import { useState } from "react"
import Ghost from "./Ghost"
import Light from "./light";

function Kitchen({light, setLight}) {

    return (
        <div className={light.on ? "room on" : "room"}>
            Kitchen
            <Ghost light={light} />
            <Light light={light} setLight={setLight} />
        </div>
    )
}

export default Kitchen