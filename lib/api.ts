import Prismic from 'prismic-javascript';

import Page from '../types/page';

// import { IGetAllPages } from '../types/api';
// import Page from '../types/page';

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
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

const transformData = (d: any) => {
  const d2: Page = {
    title: d.node.title[0].text,
    subtitle: d.node.subtitle[0].text,
    content: d.node.content[0].text,
    headerName: d.node.headername,
    href: d.node._meta.uid,
  };
  return d2;
};

const transformData2 = (d: any) => {
  const d2: Page = {
    title: d.node.title[0].text,
    subtitle: d.node.subtitle[0].text,
    content: d.node.content,
    headerName: d.node.headername,
    href: d.node._meta.uid,
  };
  return d2;
};

export async function getPageByName(page: string): Promise<any> {
  const data = await fetchAPI(
    `
    query{
      allCpages(uid:"${page}"){
        edges{
          node{
            title
            subtitle
            content
            headername
            _meta{
              uid
              type
            }
          }
        }
      }
    }
    `,
  );
  const d3 = data.allCpages.edges.map((i) => transformData2(i));
  console.log('d3: ', d3);
  return d3;
}

export async function getAllPages(): Promise<any> {
  const data = await fetchAPI(`
  query{
    allCpages{
      edges{
        node{
          title
          subtitle
          content
          headername
          _meta{
            uid
            type
          }
        }
      }
    }
  }
  `);
  const d3 = data.allCpages.edges.map((i) => transformData(i));
  return d3;
}
