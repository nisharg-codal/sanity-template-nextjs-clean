import { workspaceTypes } from '@/constants/objects';
import { schemaNames } from '@/constants/objects/schemaNames';

import type { ContentTypes } from '@/structure/@types/contentTypes.types';

export const templatesContentTypes: ContentTypes[] = [
  {
    title: 'General',
    roles: [],
    workspaces: [workspaceTypes.TEMPLATES],
    isDivider: true,
  },
  {
    title: 'Authors by Name',
    roles: [],
    workspaces: [workspaceTypes.TEMPLATES],
    children: [
      {
        title: 'Nisharg Shah',
        schemaType: schemaNames.AUTHOR,
        roles: [],
        workspaces: [workspaceTypes.TEMPLATES],
        isPlural: false,
        templates: {
          name: 'Nisharg Shah',
          isActive: false,
        },
      },
      {
        title: 'Codal',
        schemaType: schemaNames.AUTHOR,
        roles: [],
        workspaces: [workspaceTypes.TEMPLATES],
        isPlural: false,
        templates: {
          name: 'Codal',
          isActive: false,
        },
      },
    ],
  },
];
