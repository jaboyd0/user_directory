import React, { useState } from 'react';
import EmployeeList from "./components/EmployeeList";
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [query, setQuery] = useState("");

  function handleSearch (event) {
    event.preventDefault();
    setQuery(event.target.value.trim());
  }

  function clearSearch (event) {
    if (event.currentTarget.parentElement.search) {
      event.currentTarget.parentElement.search.value = "";
      setQuery("");
    }
  }

  return (
    <div className="App">
      <SearchBar
      handleSearch={handleSearch}
      clearSearch={clearSearch}
      />
      <EmployeeList query={query} />
    </div>
  );
}

export default App;
