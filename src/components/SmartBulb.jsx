function SmartBulb({ light = {}, setLight }) {

    let condition;

    if (light.condition === 'good') condition = 'off'
    else if (light.condition === 'smart') condition = 'on'
    else condition = 'broken'

    const click = () => new Audio('/sounds/light-switch-sound.mp3').play()

    return (
        <img 
            src={`/images/bulb-${condition}.png`}
            onClick={() => {
                if (light.condition === "good") {
                    setLight({ condition: "smart", on: true })
                    click()
                } else if (light.condition === "smart") {
                    setLight({ condition: "smart", on: !light.on })
                    click()
                }
            }}
        />
    )
}

export default SmartBulb