import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import youtube from "../api/youtube";
import { Button } from "react-bootstrap";
import { Stack } from "react-bootstrap";
const SearchBar=({onSubmit})=>{
  const[search,setSearch]=useState('')
  



    return<InputGroup className="mt-3">
      <Form onSubmit={(e)=>{
        e.preventDefault()
        onSubmit(search)
      }}>
        <Stack direction="horizontal" gap={3}>

       
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={e=>setSearch(e.target.value)}
          value={search}
        />
       
        <Button type="submit" variant="primary" id="basic-addon2">Search</Button>
    
        </Stack>
        </Form>
      </InputGroup>
     

   
}
export default SearchBar