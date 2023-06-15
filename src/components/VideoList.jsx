import React from "react";
import Video from "./Video";

// const videos=Array(5).fill() ---5 undefined elements in array
const VideoList=({videosList,setMainvideo})=>{

   
    return videosList.length==0 ? <h1>Loading</h1>:<div className="mt-5">
            { videosList.map((vid,idx)=>< Video videoDetail={vid} key={idx} setMainvideo={setMainvideo}/>)}
    </div> 
}
export default VideoList