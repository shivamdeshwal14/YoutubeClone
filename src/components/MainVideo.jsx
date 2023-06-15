import React from "react";
import { Card } from "react-bootstrap";
const MainVideo=({videoRef,idRef})=>{

const vid=idRef.videoId
console.log(vid);
  
  
const videoSrc = `https://www.youtube.com/embed/${vid}`


    return     <Card  className="mt-5">     
      <iframe  width="100%"height="200%"
         title="VideoTitle" 
         src={videoSrc}/> 
       <Card.Body>
        <Card.Title>{videoRef.snippet.title}</Card.Title>
        <Card.Text>
         {videoRef.snippet.channelTitle}
        </Card.Text>
        <Card.Text>
         {videoRef.snippet.description}
        </Card.Text>
      
      </Card.Body>
    </Card>
}
export default MainVideo