import { AddUserIcon, ComponentIcon } from '@sanity/icons';

import { userRoles, workspaceTypes } from '@/constants/objects';
import { schemaNames } from '@/constants/objects/schemaNames';

import type { ContentTypes } from '@/structure/@types/contentTypes.types';

export const customStructureBuilderContentTypes: ContentTypes[] = [
  {
    title: 'General Examples',
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    isDivider: true,
  },
  {
    schemaType: schemaNames.HOMEPAGE,
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    singleton: true,
  },
  {
    schemaType: schemaNames.AUTHOR,
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
  },
  {
    title: 'Author 2',
    icon: AddUserIcon,
    schemaType: schemaNames.AUTHOR,
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    isPlural: false,
  },
  {
    title: 'Drawer',
    icon: ComponentIcon,
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    children: [
      {
        schemaType: schemaNames.HOMEPAGE,
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        singleton: true,
      },
      {
        schemaType: schemaNames.AUTHOR,
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
      },
      {
        title: 'Author 2',
        icon: AddUserIcon,
        schemaType: schemaNames.AUTHOR,
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        isPlural: false,
      },
    ],
  },
  {
    title: 'Examples',
    roles: [userRoles.EDITOR, userRoles.DEVELOPER],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    isDivider: true,
  },
  {
    title: 'Filters',
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    children: [
      {
        title: 'Authors',
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        children: [
          {
            title: 'Active',
            schemaType: schemaNames.AUTHOR,
            roles: [],
            workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
            filters: ['isActive == true'],
            isPlural: false,
          },
          {
            title: 'Inactive',
            schemaType: schemaNames.AUTHOR,
            roles: [],
            workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
            filters: ['isActive != true'],
            isPlural: false,
            hideAddButton: true,
          },
        ],
      },
      {
        title: 'Authors from GROQ',
        icon: AddUserIcon,
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        filters: ['_type == $author'],
        filterParams: {
          author: schemaNames.AUTHOR,
        },
      },
      {
        title: 'Authors + Homepage from GROQ',
        icon: AddUserIcon,
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        filters: ['_type ==  $author || _type == $homepage'],
        filterParams: {
          author: schemaNames.AUTHOR,
          homepage: schemaNames.HOMEPAGE,
        },
      },
    ],
  },
  {
    title: 'Roles',
    roles: [userRoles.EDITOR, userRoles.DEVELOPER],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    children: [
      {
        title: 'Admin Only',
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        isDivider: true,
      },
      {
        schemaType: schemaNames.SETTINGS,
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        singleton: true,
      },
      {
        title: 'Editor Only',
        roles: [userRoles.EDITOR],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        isDivider: true,
      },
      {
        schemaType: schemaNames.HOMEPAGE,
        roles: [userRoles.EDITOR],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        singleton: true,
      },
      {
        title: 'Developer Only',
        roles: [userRoles.DEVELOPER],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        isDivider: true,
      },
      {
        schemaType: schemaNames.AUTHOR,
        roles: [userRoles.DEVELOPER],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
      },
    ],
  },
  {
    title: 'Templates',
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    children: [
      {
        title: 'Authors',
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
        children: [
          {
            title: 'Active',
            schemaType: schemaNames.AUTHOR,
            roles: [],
            workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
            filters: ['isActive == true'],
            isPlural: false,
            templates: {
              isActive: true,
            },
          },
          {
            title: 'Inactive',
            schemaType: schemaNames.AUTHOR,
            roles: [],
            workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
            filters: ['isActive != true'],
            isPlural: false,
            templates: {
              isActive: false,
            },
          },
        ],
      },
    ],
  },
];
