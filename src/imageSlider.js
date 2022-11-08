import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner4.jpg';
import banner4 from './images/banner5.jpg';
import banner5 from './images/banner6.jpg';
import banner6 from './images/banner7.jpg';
import banner7 from './images/banner8.jpg';
import banner8 from './images/banner9.jpg';
import banner9 from './images/banner10.jpg';

const slides=[
    {
        image: banner1
    },
    {
        image: banner2
    },
    {
        image: banner3
    },
    {
        image: banner4
    },
    {
        image: banner5
    },
    {
        image: banner6
    },
    {
        image: banner7
    },
    {
        image: banner8
    },
    {
        image: banner9
    }
]

const Slideshow=()=>{
    return(
        <div className="slide-container">
            <Slide>
                {slides.map((slideImage,index)=>(
                   <div className="slide" key={index}>
                    <div>
                    <img src={slideImage.image} width={1500}/>
                    </div>
                   </div> 
                ))}
            </Slide>
        </div>
    )
}

export default  Slideshow;