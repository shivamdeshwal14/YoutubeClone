import React from "react";
import { Col, Container, Row,Card } from "react-bootstrap";

const Video=()=>{
   
    return<Container className="mt-2">
        <Row>
            <Col sm={4}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </Col>
            <Col sm={8}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ea fugiat vitae harum iusto repellendus illum minima? </p>
            </Col>
        </Row>
    </Container>
}
export default Video