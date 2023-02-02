import React from "react"
import "./slider.css"
import { slide } from "../../assets/data/data"

function Slider() {
    return (
        <>
            <div className='slider'>
                <div className='max-w-[95%] m-auto grid gap-5 grid-cols-2 md:grid-cols-4'>
                    {slide.map((item, i) => (
                        <div className='box' key={i}>
                            <div className='img'>
                                <img src={item.image} alt='' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Slider