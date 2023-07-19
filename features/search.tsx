import React, { useState, useEffect } from "react";
import { data } from "./data/data";
import { AiOutlineEnter } from "react-icons/ai";
type SearchProps = {
  title: string;
};
export default function Search() {
  const [queryText, setQueryText] = useState("");
  const [searchResults, setSearchResults] = useState<SearchProps[]>([]);

  const getFilteredData = () => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(queryText.toLowerCase())
    );
    return filteredData;
  };

  useEffect(() => {
    const filteredData = getFilteredData();
    setSearchResults(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryText]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />

      {queryText && (
        <div className="search-results">
          {searchResults?.map(({ title, index }: any) => (
            <div className="results" key={index}>
              {title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
