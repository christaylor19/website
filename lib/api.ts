import { IGetAllPages, IGetPageByName } from '../types/api';
import Page from '../types/page';

async function fetchAPI(query: string, { variables }: any = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
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
        pages(where: $where) {
          name
          headerName
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
      pages {
        name
        headerName
        title
        subtitle
        content
        href
      }
    }
  `);
  return data;
}
