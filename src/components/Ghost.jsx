function Ghost({ light }) {
    return (
        <span>{!light.on && '👻'}</span>
    )
}

export default Ghost