import MenuList from "./Menu-List";
import './Styles.css'


export default function MenuUI({menus = []}){


    return(
        <>
            <div className="menu-list-container">
                <MenuList list={menus}/>
            </div>
        </>
    )
}