import { getWorkspaceContentTypes } from '@/structure/getWorkspaceContentTypes';
import renderContentType from '@/structure/renderContentType';

import type { StructureResolver } from 'sanity/structure';

import type { WorkspaceType } from '@/constants/@types/objects.types';

const structure: StructureResolver = (S, context) => {
  const { currentUser, schema } = context;
  const { _original: original } = schema;
  const workspace = original?.name as WorkspaceType;

  if (!workspace || !currentUser) return S.list().title('Content').items([]);

  const workspaceContentTypes = getWorkspaceContentTypes(workspace, currentUser);

  if (!workspaceContentTypes || workspaceContentTypes.length === 0) {
    return S.list().title('Content Types Not Configured');
  }

  return S.list()
    .title('Content Types')
    .items(
      workspaceContentTypes
        .map((contentType) => renderContentType(S, { ...context, currentUser }, contentType))
        .filter((item) => item !== null),
    );
};

export default structure;
