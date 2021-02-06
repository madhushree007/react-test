import { useQuery } from "react-query";
import { fetchStages } from "../stages";

export function useStages(pageId: string) {
  const query = useQuery(['stages', { pageId }], () => fetchStages(pageId));
  return query;
}