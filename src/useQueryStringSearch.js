import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import url from "url";
import config from "react-global-configuration";

import hasMinLength from "./hasMinLength";

const { minLength } = config.get("search");

export default function useQueryStringSearch() {
  const location = useLocation();
  const { q } = url.parse(location.search, true).query;

  const [search, setSearch] = React.useState(q || "");
  let history = useHistory();

  const handleChangeSearch = (event) => {
    const q = event.target.value;
    setSearch(q);
    if (hasMinLength(q, minLength)) {
      history.replace(`?q=${q}`);
    } else {
      history.replace("");
    }
  };

  return [search, handleChangeSearch];
}
