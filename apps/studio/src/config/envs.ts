const envs = {
  NODE_ENV: process.env.NODE_ENV as string,

  SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID as string,
  SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET as string,
  SANITY_STUDIO_APP_ID: process.env.SANITY_STUDIO_APP_ID as string,
  SANITY_STUDIO_HOSTNAME: process.env.SANITY_STUDIO_HOSTNAME as string,
  SANITY_STUDIO_PREVIEW_URL: process.env.SANITY_STUDIO_PREVIEW_URL as string,
} as const;

export default envs;
