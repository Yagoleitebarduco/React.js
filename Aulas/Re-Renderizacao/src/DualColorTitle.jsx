import { useState } from "react"

const DualColorTitle = ({title}) => {
    const [defineColor, setDefineColor] = useState(true)

    return (
        <div>
            <h1 className={defineColor ? 'first-color' : 'second-color'}>{title}</h1>

            <div onClick={() => {setDefineColor(!defineColor)}}>
                <input type="checkbox" name="color-switcher" checked={defineColor}/>
                <label htmlFor="color-switcher">Trocar de Cor</label>
            </div>
        </div>
    )
}

export default DualColorTitle