import { useQuery } from "react-query";

import fetchYamato from "./fetchYamato";

export default function useSushis() {
  return useQuery("sushis", () => fetchYamato("/sushis"));
}
