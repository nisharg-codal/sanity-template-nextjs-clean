import type { Environment } from '@/constants/@types/objects.types';

const envs = {
  NODE_ENV: process.env.NODE_ENV as Environment,
  ENV_NAME: process.env.NODE_ENV as Environment,
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
  NEXT_PUBLIC_SANITY_STUDIO_URL: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL as string,
  SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN as string,
} as const;

export default envs;
