import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import url from "url";
import config from "react-global-configuration";

import hasMinLength from "./hasMinLength";

const { minLength } = config.get("search");

export default function useQueryStringSearch(paramName = "q") {
  const location = useLocation();
  const params = url.parse(location.search, true).query;
  const q = params[paramName];

  const [search, setSearch] = React.useState(q || "");
  let history = useHistory();

  const handleChangeSearch = (event) => {
    const q = event.target.value;
    setSearch(q);
    if (hasMinLength(q, minLength)) {
      history.replace(`?${paramName}=${q}`);
    } else {
      history.replace("");
    }
  };

  return [search, handleChangeSearch];
}
