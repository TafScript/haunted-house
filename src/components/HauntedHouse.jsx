import { useState } from "react"
import Bathroom from "./Bathroom"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import SmartBulb from "./SmartBulb"

import End from "./End"

function HauntedHouse() {

    let light = {}

    function yoink(bulb) {}

    return (
        <div className="haunted">
            
            
            Haunted House

            <Bedroom />
            <Kitchen />
            <Bathroom />


            <SmartBulb light={light} />


            <End light={light} />
          
        </div>
    )
}

export default HauntedHouse