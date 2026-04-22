import { ComponentIcon } from '@sanity/icons';

import { workspaceTypes } from '@/constants/objects';
import { authorType } from '@/schemas/documents/authorType';
import { homepageType } from '@/schemas/documents/homepageType';

import type { ContentTypes } from '@/structure/@types/contentTypes.types';

export const structureBuilderContentTypes: ContentTypes[] = [
  {
    schemaType: homepageType.name,
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
    singleton: true,
  },
  {
    schemaType: authorType.name,
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
  },
  {
    title: 'Drawer Example',
    icon: ComponentIcon,
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
    children: [
      {
        schemaType: authorType.name,
        roles: [],
        workspaces: [workspaceTypes.STRUCTURE_BUILDER],
      },
    ],
  },
];
