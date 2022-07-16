import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term) 


  console.log(data)
  return (
    <div className="search-page">
      <div className="search-page__header">{term}</div>

      <div className="search-page__results"></div>
    </div>
  );
};

export default SearchPage;
