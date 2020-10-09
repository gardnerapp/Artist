import React from "react";
import Gallery from "react-photo-gallery";
import Knot1 from "./Knot1.jpg";
import Knot2 from "./Knot2.jpg";
import Knot3 from "./Knot3.jpg"


const KnottyRows = () => <Gallery photos={KnottyPhotos} />;
var height = 1;
var width = 1;
const KnottyPhotos =[
    {
        src: Knot1,
        width: width,
        height: height,
    },
    {src: Knot2,
width: width,
    height: height,
    },
    {src: Knot3,
width: width,
    height: height,
    },

];

export default KnottyRows