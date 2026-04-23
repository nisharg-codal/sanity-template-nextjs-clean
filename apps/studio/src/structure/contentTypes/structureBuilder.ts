import { AddUserIcon, ComponentIcon } from '@sanity/icons';

import { workspaceTypes } from '@/constants/objects';
import { schemaNames } from '@/constants/objects/schemaNames';

import type { ContentTypes } from '@/structure/@types/contentTypes.types';

export const structureBuilderContentTypes: ContentTypes[] = [
  {
    title: 'General',
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
    isDivider: true,
  },
  {
    schemaType: schemaNames.HOMEPAGE,
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
    singleton: true,
  },
  {
    schemaType: schemaNames.AUTHOR,
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
    filters: [],
  },
  {
    title: 'Author 2',
    icon: AddUserIcon,
    schemaType: schemaNames.AUTHOR,
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
    isPlural: false,
  },
  {
    title: 'Drawer Example',
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
    isDivider: true,
  },
  {
    title: 'Drawer',
    icon: ComponentIcon,
    roles: [],
    workspaces: [workspaceTypes.STRUCTURE_BUILDER],
    children: [
      {
        schemaType: schemaNames.AUTHOR,
        roles: [],
        workspaces: [workspaceTypes.STRUCTURE_BUILDER],
      },
      {
        title: 'Author 2',
        icon: AddUserIcon,
        schemaType: schemaNames.AUTHOR,
        roles: [],
        workspaces: [workspaceTypes.STRUCTURE_BUILDER],
        isPlural: false,
      },
    ],
  },
];
