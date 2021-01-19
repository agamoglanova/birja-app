import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: process.env.ghost_url,
  key: process.env.ghost_key,
  version: "v3"
});
