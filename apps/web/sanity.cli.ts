import { defineCliConfig } from 'sanity/cli';

import { envs } from '@/config';

const { NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET } = envs;

export default defineCliConfig({
  api: {
    projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: NEXT_PUBLIC_SANITY_DATASET,
  },
  typegen: {
    path: './src/sanity/**/*.{ts,tsx}',
    schema: '../studio/sanity.schema.json',
    generates: './src/sanity/generated/types/sanity.types.ts',
    overloadClientMethods: true,
  },
});
