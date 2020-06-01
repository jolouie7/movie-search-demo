import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function SearchComponent() {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Movie"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">SEARCH</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default SearchComponent
