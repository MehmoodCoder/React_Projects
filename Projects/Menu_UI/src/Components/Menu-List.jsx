import MenuItems from "./Menu-Items"
import './Styles.css'


export default function MenuList({list = []}){
    return(
        <ul className="menu-tree-container">
            {
                list && list.length ? 
                list.map((listItem) => <MenuItems key={listItem.label} item={listItem} /> )
                : null
            }
        </ul>
    )
}