import Prismic from 'prismic-javascript';

import { IGetAllPages } from '../types/api';
import Page from '../types/page';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

async function fetchAPI(query: string, { variables }: any = {}) {
  const prismicAPI = await PrismicClient.getApi();

  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    },
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();
  console.log('json: ', json);
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPageByName(page: string): Promise<Page> {
  const data = await fetchAPI(
    `
      query PagesByName($where: JSON) {
        page(where: $where) {
          name
          header_name
          title
          subtitle
          content
          href
        }
      }
    `,
    {
      variables: {
        where: {
          name: page,
        },
      },
    },
  );
  return data?.pages[0];
}

export async function getAllPages(): Promise<IGetAllPages> {
  const data = await fetchAPI(`
    {
      page{
        name
        header_name
        title
        subtitle
        content
        href
      }
    }
  `);
  return data;
}
