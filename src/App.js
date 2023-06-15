import React, { useEffect, useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./components/SearchBar";
import MainVideo from "./components/MainVideo";
import Video from "./components/Video";
import { Container,Row,Col } from "react-bootstrap";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";

const App=()=>{
// state for main video
  const[mainVideo,setMainvideo]=useState('')
  // state fot side video array
  const[videos,setvideos]=useState([])
  // state for sending vedio
  const[vedioid,setvedioid]=useState('')



  const handleSubmit=async (searchTerm)=>{
    const response=await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCPJtz7L4dAaqZJM-ZRPO2DwAbaoVXDzPk',
        q:searchTerm
      }

    });
      setMainvideo(response.data.items[0])
      setvideos(response.data.items)
      setvedioid(response.data.items[0].id)
      
     
  }
  useEffect(()=>{
    handleSubmit('Laptop')
  },[])


  return <Container> 
  <SearchBar onSubmit={handleSubmit}/>
  <Row>
        <Col sm={8}>
        <MainVideo videoRef={mainVideo} idRef={vedioid}/>
        </Col>
        <Col sm={4}>
        <VideoList  videosList={videos} setMainvideo={setMainvideo}/>
        </Col>
      </Row>
 

   
  </Container>
}
export default App