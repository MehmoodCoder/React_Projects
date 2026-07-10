import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './Styles.css'



export default function ImgSlider({URL, limit = 5, page = 1}){

    const [img, setImg] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [ErrorMsg, setErrorMsg] = useState(null)
    const [Loading, setLoading] = useState(false)

    async function fetchImg(getURL){
        try {

            setLoading(true)

            const response = await fetch(`${getURL}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImg(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? img.length -1 : currentSlide - 1)
    }

    function handleNext(){
        setCurrentSlide(currentSlide === img.length -1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (URL !== '') {
            fetchImg(URL)
        }
    }, [URL])

    console.log(img);
    

    if(Loading){
        return (
            <div className="loading">
                <h1 style={{textAlign: "center"}}>Loading ...</h1>
            </div>
        )
    }

    if (ErrorMsg !== null) {
        return(
            <div className="error">
                Error : {ErrorMsg}
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <BsArrowLeftCircleFill 
                    className="arrow arrow-left"
                    onClick={handlePrevious}
                />
                {
                    img && img.length ?
                    img.map(
                        (imgItem,index) => (
                            <img
                                key={imgItem.id}
                                src={imgItem.download_url} 
                                alt={imgItem.url}
                                className={currentSlide === index ? 'current-img': 'current-img hide-img'}
                            />
                        )
                    ) : null
                }
                <BsArrowRightCircleFill 
                    className="arrow arrow-right"
                    onClick={handleNext}
                />

                <span className="circle-indicators">
                    {
                        img && img.length ?
                        img.map((_,index) => {
                            return (<button
                                key={index}
                                className={currentSlide === index ? "current-indicator" : "current-indicator hide-indicator"}
                                onClick={() => setCurrentSlide(index)}
                            >

                            </button>)
                        }) : null
                    }
                </span>
            </div>
        </>
    )
}