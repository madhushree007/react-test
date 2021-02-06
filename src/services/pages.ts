import { AxiosResponse } from 'axios';
import { fetchInstance } from './config';

type PagesResponse = {
  pages: Page[];
  count: number;
}
type Page = {
  id: string;
  name: string;
  type: string;
  published: boolean;
  stagesCount: number;
};



export async function fetchPages(): Promise<AxiosResponse<PagesResponse>> {
  const res = await fetchInstance(`/pages`);
  const data = res;
  return data;
}

