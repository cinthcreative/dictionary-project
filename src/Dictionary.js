import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `http://api.dictionaryapi.dev/api/v2/entries/en-US/${keyword}`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
