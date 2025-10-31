import { useState } from "react"
import Bathroom from "./Bathroom"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import SmartBulb from "./SmartBulb"
import Light from "./light"

import End from "./End"

function HauntedHouse() {

    const [light, setLight] = useState({ on: false, condition: 'bad' })

    function yoink(bulb) {}

    return (
        <div className="haunted">
            
            
            Haunted House

            <Bedroom light={light} setLight={setLight} yoink={yoink}/>
            <Kitchen light={light} setLight={setLight}/>
            <Bathroom light={light} setLight={setLight}/>


            <SmartBulb light={light} setLight={setLight} />


            <End light={light} />
          
        </div>
    )
}

export default HauntedHouse