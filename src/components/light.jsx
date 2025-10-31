import {useState} from 'react';

function Light({light, setLight}) {
    
    return (
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
    )
}

export default Light;