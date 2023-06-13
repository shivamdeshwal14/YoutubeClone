import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const SearchBar=()=>{
    return<>
    <InputGroup className="mt-3">
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
      </InputGroup>

    </>
}
export default SearchBar