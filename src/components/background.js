import React from "react";
import './background.css';
import HomeRows from "../images/Home/HomePhotos";
import FireRows from "../images/Fire/FirePhots";
import KnottyRows from "../images/Knots/Knots";
import PuzzleRows from "../images/Puzzle/Puzzle";
import VaseRows from "../images/Vase/Vase";

function Background() {
    return (
        <div className={"Page"}>
            <h1 className={"Header"}>Scott Seabolt</h1>
            <div style={{margin: 50, marginTop: 0}}>
            <HomeRows/>
            </div>
            <div style={{margin: 50}}>
            <FireRows/>
            </div>
             <div style={{margin: 50}}>
            <KnottyRows/>
            </div>
             <div style={{margin: 50}}>
            <PuzzleRows/>
            </div>
             <div style={{margin: 50}}>
            <VaseRows/>
            </div>
            <div>filler</div>
             <div>filler</div>
             <div>filler</div>
        </div>
    )
}

export default Background