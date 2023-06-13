import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import MainVideo from "./components/MainVideo";
import Video from "./components/Video";
import { Container,Row,Col } from "react-bootstrap";
import VideoList from "./components/VideoList";

const App=()=>{
  return <Container> 
  <SearchBar/>
  <Row>
        <Col sm={8}>
        <MainVideo/>
        </Col>
        <Col sm={4}>
        <VideoList/>
        </Col>
      </Row>
 

   
  </Container>
}
export default App