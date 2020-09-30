import React from "react";
import { TextField } from "@material-ui/core";

import Screen from "../Screen";
import SushiCardList from "../SushiCardList";
import useQueryStringSearch from "../useQueryStringSearch";

export default function HomeScreen() {
  const [search, setSearch] = useQueryStringSearch();

  return (
    <Screen title="Homepage">
      <TextField
        variant="outlined"
        value={search}
        onChange={setSearch}
        fullWidth
      />
      <SushiCardList search={search} />
    </Screen>
  );
}
