import { useQuery } from "react-query";
import { isEmpty } from "lodash";

import fetchYamato from "./fetchYamato";

export default function useSushis(search) {
  let route = ["/sushis"];
  if (!isEmpty(search)) route.push(`?q=${search}`);

  return useQuery(["sushis", search], () => fetchYamato(route.join("")));
}
