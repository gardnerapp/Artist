import React from "react";
import Gallery from "react-photo-gallery";
import vase1 from "./vase1.jpeg";
import vase2 from "./vase2.jpeg";
import vase3 from "./vase3.jpeg";
import vase4 from "./vase4.jpeg";
import vase5 from "./vase5.jpg";
import vase6 from "./vase6.jpeg"



const VaseRows = () => <Gallery photos={VasePhotos} />;
var height = 2;
var width = 2;
const VasePhotos =[
    {
        src: vase1,
        width: width,
        height: height,
    },
    {src: vase2,
width: width,
    height: height,
    },
    {src: vase3,
width: width,
    height: height,
    },
    {src: vase4,
width: width,
    height: height,
    },
     {src: vase5,
width: width,
    height: height,
    },
     {src: vase6,
width: width,
    height: height,
    },

];

export default VaseRows