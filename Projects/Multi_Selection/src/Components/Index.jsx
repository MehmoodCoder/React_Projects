import Data from "./Data"
import "./Style.css"
import { useState } from "react";

export default function Accordian(){

    const [selected, setSelected] = useState(null)
    const [enabled, enableMultiSelected] = useState(false)
    const [multiSelected, setMultiSelected] = useState([])

    function handleSingleSelection(Id){
        setSelected(Id === selected ? null : Id)
    }
    
    function handleMultiSelected(Id){
        let copyMultiple = [...multiSelected]
        const findIdIndex = copyMultiple.indexOf(Id)

        if(findIdIndex === -1) copyMultiple.push(Id)
        else copyMultiple.splice(findIdIndex, 1)  
    
        setMultiSelected(copyMultiple)
    }

    return (
            <div className="wrapper">
                <button onClick={() => enableMultiSelected(!enabled)}>
                    Enable Multi Select
                </button>
                <div className="accordian">
                    {
                        Data && Data.length > 0 ? (
                        Data.map( (DataItems) => (
                        
                        <div key={DataItems.id} className = "items">
                            <div onClick={
                                enabled
                                ? () => handleMultiSelected(DataItems.id)
                                : () => handleSingleSelection(DataItems.id)} 
                                className="title">
                                <h3>{DataItems.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enabled ? multiSelected.indexOf(DataItems.id) !== -1 && (
                                    <div className="contect">{DataItems.answer}</div>
                                ) : 
                                selected === DataItems.id && (
                                    <div className="content">
                                        {DataItems.answer}
                                    </div>
                                )
                            }
                                {/* {
                                    selected === DataItems.id || 
                                    multiSelected.indexOf(DataItems.id) !== -1 ? (
                                        <div className="content">{DataItems.answer}</div>
                                    ) : (null)
                                } */}
                        </div>

                        ))
                        ):( 
                        
                        <div>No Data Found!</div>
                    )}
                </div>
            </div>
    )        
}
