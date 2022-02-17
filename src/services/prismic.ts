import * as prismic from "@prismicio/client";

const repoName = "your-repo-name";
const endpoint = prismic.getEndpoint(repoName);
const client = prismic.createClient(endpoint);