import React, { useEffect } from "react";
import { useState } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  let [searchResult, setSearchResult] = useState([]);



  /* const setIdTitleVec = () => {
    for (var key in searchResult) {
      if (searchResult.hasOwnProperty(key))
        return searchResult[Object.keys(searchResult)[0]];
    }
    return [];
  };
 */

  return (
    <Context.Provider value={{
      searchResult, setSearchResult
    }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;