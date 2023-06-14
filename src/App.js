import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import MainVideo from "./components/MainVideo";
import Video from "./components/Video";
import { Container,Row,Col } from "react-bootstrap";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";

const App=()=>{



  const handleSubmit=async (searchTerm)=>{
    const response=await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCPJtz7L4dAaqZJM-ZRPO2DwAbaoVXDzPk',
        q:searchTerm
      }

    });
    console.log(response.data);

  }


  return <Container> 
  <SearchBar onSubmit={handleSubmit}/>
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