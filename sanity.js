import { createClient } from "@sanity/client";

export default createClient({
  projectId: import.meta.env.VITE_APP_SANITY_ID,
  dataset: "production",
  apiVersion: "2022-01-12",
  useCdn: false,
});
