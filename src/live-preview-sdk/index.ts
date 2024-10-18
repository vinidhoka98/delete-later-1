import { ContentstackGatsby } from "gatsby-source-contentstack/live-preview";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

const isBrowser = typeof window !== "undefined"

let getCSData: ContentstackGatsby;

if (isBrowser) {
  getCSData = new ContentstackGatsby({
    api_key: process.env.CONTENTSTACK_API_KEY,
    environment: process.env.CONTENTSTACK_ENVIRONMENT,
    delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    region: process.env.CONTENTSTACK_REGION ? process.env.CONTENTSTACK_REGION : "us",
    branch: process.env.CONTENTSTACK_BRANCH ? process.env.CONTENTSTACK_BRANCH : "main",
    live_preview: {
      management_token: process.env.CONTENTSTACK_MANAGEMENT_TOKEN,
      enable: process.env.CONTENTSTACK_LIVE_PREVIEW === "true",
      host: process.env.CONTENTSTACK_API_HOST,
    },
    jsonRteToHtml: true,
  });

  const cdnHost = process.env.CONTENTSTACK_API_HOST?.replace(/api/g, "cdn");
  getCSData.setHost(cdnHost);

  ContentstackLivePreview.init({
    stackSdk: getCSData.stackSdk,
    clientUrlParams: {
      host: process.env.CONTENTSTACK_APP_HOST
    }
  })
}

export { getCSData };
