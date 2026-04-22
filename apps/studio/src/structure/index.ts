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
    return S.list().title('No Sites Configured');
  }

  return S.list()
    .title('Sites')
    .items(
      workspaceContentTypes
        .map((contentType) => renderContentType(S, contentType, currentUser))
        .filter((item) => item !== null),
    );
};

export default structure;
