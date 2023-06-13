import React from "react";
import { Card } from "react-bootstrap";
const MainVideo=()=>{
    return <Card className="mt-5">
     
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <Card.Title>My first Video</Card.Title>
        <Card.Text>
          Testing card for main video
        </Card.Text>
      
      </Card.Body>
    </Card>
}
export default MainVideo