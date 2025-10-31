import { useState } from "react"
import Ghost from "./Ghost"
import Drawer from "./Drawer"
import Light from "./light"

function Closet({light, setLight, yoink}) {

    return (
        <div className={light.on ? "room on" : "room"}>
            Closet
            {light.on && <Drawer yoink={yoink} />}
            <Ghost light={light} />
            <Light light={light} setLight={setLight} />
        </div>
    )
}

export default Closet