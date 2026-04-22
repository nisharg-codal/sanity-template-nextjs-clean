import { allContentTypes } from '@/workspace/allContentTypes';

import type { WorkspaceConfig } from '@/workspace/@types/common.types';

export const templates: NonNullable<WorkspaceConfig['schema']>['templates'] = (prev) => {
  // Non creatable content types
  const nonCreatableContentTypes = new Set(
    allContentTypes
      .filter(({ hideAddButton }) => hideAddButton)
      .map(({ schemaType }) => schemaType),
  );

  // Get all the template which are allowed to be created
  const templatesArr = prev.filter(({ schemaType }) => !nonCreatableContentTypes.has(schemaType));

  return templatesArr;
};
