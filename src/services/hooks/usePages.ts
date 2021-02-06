import { useQuery } from "react-query";
import { fetchPages } from "../pages";

export function usePages() {
  const query = useQuery('pages', fetchPages);
  return query;
}