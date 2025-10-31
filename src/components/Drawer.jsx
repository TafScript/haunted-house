function Drawer({yoink}) {

    function open() {
        let newLightBulb = { on: false, condition: "good"}
        const sound = new Audio('/sounds/open.wav')
        sound.play()
        yoink(newLightBulb)
    }

    return (
        <img 
            className="drawer"
            onClick={open}
            src="/images/drawer.png" alt="drawer" 
        />
    )
}

export default Drawer