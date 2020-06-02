import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function SearchComponent({ search }) {
  const [searchTerm, setSearchTerm] = useState("")

  const onClickHandler = (searchTerm) => {
    search(searchTerm)
    setSearchTerm("")
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          onChange={e => {setSearchTerm(e.target.value)}}
          value={searchTerm}
          placeholder="Search Movie"
        />
        <InputGroup.Append>
          <Button onClick={onClickHandler} variant="outline-secondary">SEARCH</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default SearchComponent

// TODO: Work on search feature