import React from "react";
import { Card } from "react-bootstrap";
const MainVideo=({videoRef,})=>{

const vid=videoRef.id.videoId
const videoSrc = `https://www.youtube.com/embed/${vid}`

    return     <Card  className="mt-5">     
     <iframe width="420" height="345" src={videoSrc}>
    </iframe>
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