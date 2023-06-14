import React from "react";
import Video from "./Video";
const videos =[1,2,3,4,5]
// const videos=Array(5).fill() ---5 undefined elements in array
const VideoList=()=>{
    return<div className="mt-5">
            { videos.map((vid,idx)=><Video key={idx}/>)}
    </div> 
}
export default VideoList