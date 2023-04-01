const DropDown = ({ dropdown, hidden }) => {
    return (
        <div id="dropdown" className={hidden}>
            <ul className="my-4">
                {dropdown.map(obj => (
                    <li className="flex my-2 text-sm" key={obj.name}>
                        {obj.hasOwnProperty('icon') == false ? '' : <img className="pr-2 h-4" src={obj.icon} alt={obj.name} />}
                        {obj.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DropDown;