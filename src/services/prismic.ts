import * as prismic from "@prismicio/client";
/* import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  return prismic
}
 */

const repoName = "your-repo-name";
const endpoint = prismic.getEndpoint(repoName);
const client = prismic.createClient(endpoint);