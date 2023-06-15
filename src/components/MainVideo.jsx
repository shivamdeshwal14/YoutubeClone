import React from "react";
import { Card } from "react-bootstrap";
const MainVideo=({videoRef})=>{

  
const videoSrc = `https://www.youtube.com/embed/${videoRef.videoId}`
  // if(videoRef==undefined)
  // return <h1>Please search something....</h1>

    return <Card className="mt-5">
     
      
      <iframe  height="100%" width="100%" title="VideoTitle" src={videoSrc}/>
      <Card.Body>
        <Card.Title>My first Video</Card.Title>
        <Card.Text>
          Testing card for main video
        </Card.Text>
      
      </Card.Body>
    </Card>
}
export default MainVideo