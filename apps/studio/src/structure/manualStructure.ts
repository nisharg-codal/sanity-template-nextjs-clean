import { getWorkspaceContentTypes } from '@/structure/getWorkspaceContentTypes';

import type { StructureResolver } from 'sanity/structure';

import type { WorkspaceType } from '@/constants/@types/objects.types';

const manualStructure: StructureResolver = (S, context) => {
  const { currentUser, schema } = context;
  const { _original: original } = schema;
  const workspace = original?.name as WorkspaceType;

  if (!workspace || !currentUser) return S.list().title('Content').items([]);

  const workspaceContentTypes = getWorkspaceContentTypes(workspace, currentUser);

  if (!workspaceContentTypes || workspaceContentTypes.length === 0) {
    return S.list().title('Content Types Not Configured');
  }

  return S.list().title('Sites').items();
};

export default manualStructure;
