import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './star.css'

export default function StarRating({NoOfStars = 5}){

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
      <div className="star-rating">
        {
            [...Array(NoOfStars)].map(
                (_,index) => {

                    index++

                    return (
                        <FaStar
                            key={index}
                            className= {index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => {
                                console.log(index)
                                setRating(index)
                            }}
                            onMouseEnter={() => {
                                console.log(index)
                                setHover(index)
                            }}
                            onMouseLeave={() => {
                                console.log(index)
                                setHover(rating)
                            }}
                            size={40}
                        />
                    )
                }
            )
        }
      </div>
    )
}