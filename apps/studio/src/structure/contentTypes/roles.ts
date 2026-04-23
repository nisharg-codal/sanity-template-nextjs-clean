import { userRoles, workspaceTypes } from '@/constants/objects';
import { schemaNames } from '@/constants/objects/schemaNames';

import type { ContentTypes } from '@/structure/@types/contentTypes.types';

export const rolesContentTypes: ContentTypes[] = [
  {
    title: 'General',
    roles: [userRoles.DEVELOPER],
    workspaces: [workspaceTypes.ROLES],
    isDivider: true,
  },
  {
    schemaType: schemaNames.HOMEPAGE,
    roles: [userRoles.DEVELOPER],
    workspaces: [workspaceTypes.ROLES],
    singleton: true,
  },
  {
    schemaType: schemaNames.AUTHOR,
    roles: [userRoles.DEVELOPER],
    workspaces: [workspaceTypes.ROLES],
  },
  {
    title: 'Admins Only',
    roles: [],
    workspaces: [workspaceTypes.ROLES],
    isDivider: true,
  },
  {
    title: 'Active Authors',
    schemaType: schemaNames.AUTHOR,
    roles: [],
    workspaces: [workspaceTypes.ROLES],
    filters: ['isActive == true'],
  },
  {
    schemaType: schemaNames.SETTINGS,
    roles: [],
    workspaces: [workspaceTypes.ROLES],
    singleton: true,
  },
];
