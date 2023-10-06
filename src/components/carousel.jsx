// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import './carousel.css';

 

function Carousel(props) {

    console.log(props);
    const[img,setImg] = useState([]);

    useEffect(()=>{

        const img_url  = axios.create({
            baseURL: props.url

             });

             img_url.get().then((response) => {
                const imgObject = response.data.sprites;
                console.log(response);

                console.log(Object.values(imgObject).filter((val)=> {return val!==null}));
                setImg(Object.values(imgObject).filter(function(val) { return val !== null; }))
                // setImg(Object.values(imgObject));
                
    })
} , [props]
    )




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

 

  return (
<div className="carousel-container">

<Slider {...settings}>
    
    {img.map((eximg , index)=> {return(<div  className = "slick-slide" key = {index} >
<img className = "slick-side-img container-card-img" src={eximg} alt="Image 1" />
</div>);})}

        {/* Add more slides as needed */}
</Slider>
</div>
  );
}

 

export default Carousel;