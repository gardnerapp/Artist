import Fire1 from "./Fire1.jpg";
import Fire2 from "./Fire2.jpg";
import Fire3 from "./Fire3.jpg";
import Fire4 from "./Fire4.jpg"
import React from "react";
import Gallery from "react-photo-gallery";

const FireRows = () => <Gallery photos={FirePhotos} />;
var height = 1;
var width = 1;
const FirePhotos = [
    {
        src: Fire1,
        width: width,
        height: height,
    },
    {
        src: Fire2,
        width: width,
        height: height,
    },
    {
        src: Fire3,
        width: width,
        height: height,
    },
    {
        src: Fire4,
        width: width,
        height: height,

    },

];

export default FireRows
