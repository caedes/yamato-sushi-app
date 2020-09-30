import { useQuery } from "react-query";
import { isEmpty } from "lodash";
import config from "react-global-configuration";

import fetchYamato from "./fetchYamato";
import hasMinLength from "./hasMinLength";

const { minLength } = config.get("search");

export default function useSushis(search) {
  let route = ["/sushis"];
  if (!isEmpty(search) && hasMinLength(search, minLength))
    route.push(`?q=${search}`);

  return useQuery(["sushis", hasMinLength(search, minLength) && search], () =>
    fetchYamato(route.join(""))
  );
}
