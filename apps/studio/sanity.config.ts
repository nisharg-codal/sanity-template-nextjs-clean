import { assist } from '@sanity/assist';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';

import { envs } from '@/config';
import schemaTypes from '@/schemas';
import structure from '@/structure';

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, SANITY_STUDIO_PREVIEW_URL } = envs;

export default defineConfig({
  name: 'default',
  title: 'Sanity + Next.js Starter Template',
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      previewUrl: {
        origin: SANITY_STUDIO_PREVIEW_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    assist(),
    visionTool(),
  ],
});
