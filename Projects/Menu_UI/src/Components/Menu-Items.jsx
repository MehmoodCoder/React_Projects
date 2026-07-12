import { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import MenuList from "./Menu-List";


export default function MenuItems({item}){

    const [currentChild, setCurrentChild] = useState({})

    function handleToggleChildren(labelID){
        setCurrentChild({
            ...currentChild,
            [labelID] : !currentChild[labelID],
        })
    }

    console.log(currentChild);
    

    return(
        <>
        <li>
            <div 
                className="menu-items"
            >
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ?
                    <span style={{cursor: "pointer"}} onClick={() => handleToggleChildren(item.label)}>
                        {
                            currentChild[item.label] ?
                            <FaMinus color="#fff" size={25}/> :
                            <FaPlus color="#fff" size={25}/>
                        }
                    </span> :
                    null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && currentChild[item.label] ?
                <MenuList list={item.children}/> :
                null
            }
        </li>
        </>
    )
}