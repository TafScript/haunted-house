import { useState } from "react"
import Ghost from "./Ghost"

function Kitchen() {
    const [light, setLight] = useState({ on: false, condition: 'bad' })

    return (
        <div className={light.on ? "room on" : "room"}>
            <img
                src={`/images/bulb-${light.on ? 'on' : 'off'}.png`}
                alt="light bulb"
                className="bulb"
                onClick={() => {
                    setLight({ ...light, on: !light.on })
                    new Audio('/sounds/light-switch-sound.mp3').play()
                    if (light.condition !== 'good') setTimeout(() => setLight(l => l.condition === "bad" ? { ...light, on: false } : l), Math.floor(Math.random() * 3000))
                    else if (light.condition === 'good') setTimeout(() => setLight({ ...light, on: false }), Math.floor(Math.random() * 3000))
                }}
            />
            Kitchen
            <Ghost light={light} />
        </div>
    )
}

export default Kitchen