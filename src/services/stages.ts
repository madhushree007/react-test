import { AxiosResponse } from 'axios';
import { fetchInstance } from './config';

type StagesResponse = {
  stages: Stage[];
  count: number;
}

type Stage = {
  id: string;
  name: string;
  type: string;
  pageId: string;
  narrative: string;
  linksCount: number;
  display: displayI;
}

type displayI = {
  x: number;
  y: number;
  width: number;
  height: number;
}

export async function fetchStages(pageId: string): Promise<AxiosResponse<StagesResponse>> {
  const res = await fetchInstance(`/stages`, { params: { pageId } })
  const data = res;
  return data;
}