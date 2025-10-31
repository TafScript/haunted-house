import { sound, imgPath, customClass } from "../util"

function End({ light }) {
    return (
        <>
            <img 
                src={imgPath()}  
                className={customClass(light)}
            />
            {sound(light)}
        </>
    )
}
export default End