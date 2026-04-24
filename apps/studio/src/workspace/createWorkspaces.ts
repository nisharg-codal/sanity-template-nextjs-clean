import { assist } from '@sanity/assist';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';

import envs from '@/config/envs';
import { userRoles, workspaceTypes } from '@/constants/objects';
import schemaTypes from '@/schemas';
import { documentActions } from '@/workspace/documentActions';
import { templates } from '@/workspace/templates';
import { getUserRoles } from '@/workspace/userRoles';
import workspaces from '@/workspace/workspaces';

import type { WorkspaceOptions } from 'sanity';

import type { WorkspaceConfig } from '@/workspace/@types/common.types';

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_PREVIEW_URL } = envs;

type CreateWorkspaces = () => WorkspaceConfig[];

const createWorkspaces: CreateWorkspaces = () =>
  workspaces.map((workspace) => {
    const { structure } = workspace;

    return {
      ...workspace,
      projectId: SANITY_STUDIO_PROJECT_ID,
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
      schema: {
        types: schemaTypes,
        templates,
      },
      document: {
        actions: documentActions,
      },
      tools: (prev, context) => {
        const { schema, currentUser } = context;

        const isAdmin = getUserRoles({ currentUser }).includes(userRoles.ADMINISTRATOR);
        const isToolsWorkspace = schema.name === workspaceTypes.TOOLS;

        if (!isAdmin || isToolsWorkspace) return prev.filter((tool) => tool.name !== 'vision');

        return prev;
      },
    } satisfies WorkspaceOptions;
  });

export default createWorkspaces;
