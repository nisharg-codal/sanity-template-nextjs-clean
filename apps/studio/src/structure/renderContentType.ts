import { plural } from 'pluralize';

import { constants } from '@/constants/objects';

import type { RenderContentType } from '@/structure/@types/common.types';

const renderContentType: RenderContentType = (S, contentType, currentUser) => {
  const {
    id,
    schemaType,
    children,
    singleton,
    isPlural,
    filters = [],
    filterParams = {},
    title = '',
    icon = '',
    isDivider = false,
  } = contentType;

  const roleFilter = typeof filters === 'function' ? filters(currentUser) : filters;

  if (isDivider) return S.divider().title(title);

  // Handle folders (items with children)
  if (children && children.length > 0) {
    return S.listItem()
      .title(title)
      .id(id)
      .icon(icon)
      .child(
        S.list()
          .title(title)
          .items(
            children
              .map((child) => renderContentType(S, child, currentUser))
              .filter((child) => child !== null),
          ),
      );
  }

  if (!schemaType) return null;

  const schemaTitle = (() => {
    const sanityTitle = S.documentTypeListItem(schemaType).getTitle();
    const isItPlural = isPlural ?? !singleton;
    const mainTitle = title || (sanityTitle ?? '');

    return isItPlural ? plural(mainTitle) : mainTitle;
  })();

  // Handle Document Types
  return S.listItem()
    .title(schemaTitle)
    .id(id)
    .icon(icon)
    .schemaType(schemaType)
    .child(
      (() => {
        if (singleton) {
          const schemaBuilder = S.editor()
            .id([schemaType, constants.SINGLETON_KEY].join('-'))
            .schemaType(schemaType);

          return schemaBuilder;
        }

        const schemaBuilder = S.documentTypeList(schemaType)
          .title(schemaTitle)
          .id(id)
          .filter(['_type == $schemaType', ...(roleFilter ?? [])].join(' && '))
          .params({
            schemaType,
            ...filterParams,
          });

        return schemaBuilder;
      })(),
    );
};

export default renderContentType;
