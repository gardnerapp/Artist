import React from "react";
import Gallery from "react-photo-gallery";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg"



const PuzzleRows = () => <Gallery photos={PuzzlePhotos} />;
var height = 1;
var width = 1;
const PuzzlePhotos =[
    {
        src: p1,
        width: width,
        height: height,
    },
    {src: p2,
width: width,
    height: height,
    },
    {src: p3,
width: width,
    height: height,
    },
    {src: p4,
width: width,
    height: height,
    },

];

export default PuzzleRows