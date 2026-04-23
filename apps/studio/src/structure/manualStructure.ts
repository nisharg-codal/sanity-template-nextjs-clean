import { AddUserIcon, ComponentIcon } from '@sanity/icons';

import { constants } from '@/constants/objects';
import { schemaNames } from '@/constants/objects/schemaNames';

import type { StructureResolver } from 'sanity/structure';

const manualStructure: StructureResolver = (S) =>
  S.list()
    .title('Content Types')
    .items([
      // Divider: General
      S.divider().title('General'),

      // Homepage
      S.listItem()
        .title('Homepage')
        .schemaType(schemaNames.HOMEPAGE)
        .child(
          S.editor()
            .schemaType(schemaNames.HOMEPAGE)
            .documentId([schemaNames.HOMEPAGE, constants.SINGLETON_KEY].join('-')),
        ),

      // Author (Listing)
      S.listItem()
        .title('Authors')
        .schemaType(schemaNames.AUTHOR)
        .child(S.documentTypeList(schemaNames.AUTHOR).title('Authors')),

      // Author 2 (Singular naming)
      S.listItem()
        .title('Author 2')
        .icon(AddUserIcon)
        .schemaType(schemaNames.AUTHOR)
        .child(S.documentTypeList(schemaNames.AUTHOR).title('Author 2')),

      // Divider: Drawer Example
      S.divider().title('Drawer Example'),

      // Drawer (Nested children)
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
    ]);

export default manualStructure;
