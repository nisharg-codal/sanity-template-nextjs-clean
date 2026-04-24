import { AddUserIcon, ComponentIcon } from '@sanity/icons';

import { constants, userRoles, workspaceTypes } from '@/constants/objects';
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
    schemaType: schemaNames.AUTHOR,
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    isPlural: false,
  },
  {
    title: 'Author 2',
    icon: AddUserIcon,
    schemaType: schemaNames.AUTHOR,
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
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
      },
    ],
  },
  {
    title: 'Feature Examples',
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
          },
          {
            title: 'Inactive',
            schemaType: schemaNames.AUTHOR,
            roles: [],
            workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
            filters: ['isActive != true'],
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
            templates: {
              isActive: false,
            },
          },
        ],
      },
    ],
  },
  {
    title: 'Raw',
    roles: [],
    workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
    children: [
      {
        raw: (S) => S.divider().title('General'),
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
      },
      {
        raw: (S) =>
          S.listItem()
            .title('Homepage')
            .schemaType(schemaNames.HOMEPAGE)
            .child(
              S.editor()
                .schemaType(schemaNames.HOMEPAGE)
                .documentId([schemaNames.HOMEPAGE, constants.SINGLETON_KEY].join('-')),
            ),
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
      },
      {
        raw: (S) =>
          S.listItem()
            .title('Authors')
            .schemaType(schemaNames.AUTHOR)
            .child(S.documentTypeList(schemaNames.AUTHOR).title('Authors')),
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
      },
      {
        raw: (S) =>
          S.listItem()
            .title('Author 2')
            .icon(AddUserIcon)
            .schemaType(schemaNames.AUTHOR)
            .child(S.documentTypeList(schemaNames.AUTHOR).title('Author 2')),
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
      },
      {
        raw: (S) => S.divider().title('Drawer Example'),
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
      },
      {
        raw: (S) =>
          S.listItem()
            .title('Drawer')
            .icon(ComponentIcon)
            .child(
              S.list()
                .title('Drawer')
                .items([
                  // Author
                  S.listItem()
                    .title('Authors')
                    .schemaType(schemaNames.AUTHOR)
                    .child(S.documentTypeList(schemaNames.AUTHOR).title('Authors')),

                  // Author 2
                  S.listItem()
                    .title('Author 2')
                    .icon(AddUserIcon)
                    .schemaType(schemaNames.AUTHOR)
                    .child(S.documentTypeList(schemaNames.AUTHOR).title('Author 2')),
                ]),
            ),
        roles: [],
        workspaces: [workspaceTypes.CUSTOM_STRUCTURE_BUILDER],
      },
    ],
  },
];
