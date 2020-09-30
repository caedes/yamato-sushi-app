import { useQuery } from "react-query";
import { isEmpty } from "lodash";
import config from "react-global-configuration";

import fetchYamato from "./fetchYamato";

const { minLength } = config.get("search");
const hasMinLength = (search) => search.length >= minLength;

export default function useSushis(search) {
  let route = ["/sushis"];
  if (!isEmpty(search) && hasMinLength(search)) route.push(`?q=${search}`);

  return useQuery(["sushis", hasMinLength(search) && search], () =>
    fetchYamato(route.join(""))
  );
}
