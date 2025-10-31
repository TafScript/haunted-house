import { useState } from "react"
import Light from "./light"
import Ghost from "./Ghost"

function Bathroom({light, setLight}) {


    return (
        <div className={light.on ? "room on" : "room"}>
            Bathroom
            <Ghost light={light}/> 
            <Light light={light} setLight={setLight} />
        </div>
    )
}

export default Bathroom