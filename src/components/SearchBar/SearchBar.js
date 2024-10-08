import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <InputGroup className="search-bar mb-3">
      <Form.Control
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for products..."
        className="search-input"
      />
      <Button
        variant="primary"
        onClick={handleSearch}
        className="search-button"
      >
        Search
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
