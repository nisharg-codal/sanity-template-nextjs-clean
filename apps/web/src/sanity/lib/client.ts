import { createClient } from 'next-sanity';

import { envs } from '@/config';
import { token } from '@/sanity/lib/token';

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION,
  NEXT_PUBLIC_SANITY_STUDIO_URL,
} = envs;

export const sanityClient = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
  token,
  stega: {
    studioUrl: NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});
