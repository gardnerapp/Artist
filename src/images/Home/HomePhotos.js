import image1 from './Image1.jpg';
import image2 from "./Image2.jpg"
import React from "react";
import Gallery from "react-photo-gallery";

const HomeRows = () => <Gallery photos={HomePhotos} />;
const HomePhotos =[
    {
        src: image1,
        width: 1,
        height: 1,
    },
    {src: image2,
width: 1,
    height: 1,
    },

];

export default HomeRows