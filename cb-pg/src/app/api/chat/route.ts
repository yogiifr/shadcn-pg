import { createAzure } from "@ai-sdk/azure";

const azure = createAzure({
  resourceName: process.env.AZURE_RESOURCE_NAME, // Azure resource name
  apiKey: process.env.AZURE_API_KEY,
});
