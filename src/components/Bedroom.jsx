import { useState } from "react"
import Closet from "./Closet"
import Ghost from "./Ghost"
import Light from "./light"

function Bedroom({light, setLight, yoink}) {


    return (
        <div className={light.on ? "room on" : "room"}>
            Bedroom
            <Ghost light={light} />
            <Light light={light} setLight={setLight} />
            <Closet light={light} setLight={setLight} yoink={yoink} />
            
        </div>
    )
}

export default Bedroom