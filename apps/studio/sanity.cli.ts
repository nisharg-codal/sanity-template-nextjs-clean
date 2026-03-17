import { defineCliConfig } from 'sanity/cli';
import tsconfigPaths from 'vite-tsconfig-paths';

import envs from '@/config/envs';

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_APP_ID, SANITY_STUDIO_HOSTNAME } = envs;

export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_PROJECT_ID,
  },
  studioHost: SANITY_STUDIO_HOSTNAME,
  deployment: {
    autoUpdates: false,
    appId: SANITY_STUDIO_APP_ID,
  },
  typegen: {
    schema: './schema.json',
    generates: './src/types/generated/sanity.types.ts',
    overloadClientMethods: true,
    formatGeneratedCode: true,
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
  reactCompiler: {
    target: '19',
  },
});
