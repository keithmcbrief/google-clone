import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue()

  const [input, setInput] = React.useState("");
  const navigate = useNavigate();

  function search(event) {
    event.preventDefault();

    console.log('you hit search', input)

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,

    })

    navigate("searchpage");
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon className="search__mic--icon" />
      </div>

      {
        <div className={!hideButtons ? "search__buttons" : "search__buttons--hidden"}>
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
      }

    </form>
  );
};

export default Search;
