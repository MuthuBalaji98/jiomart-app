import Slideshow from './imageSlider';
import './body.css';
import banner10 from './images/banner3.jpg';

function Body() { 
   
    return(
        <body>
        <div className="banner">
            <Slideshow></Slideshow>
            <img src={banner10} width={1500} alt="banner" /> 
        </div>
       
        </body>
    )
}
export default Body;