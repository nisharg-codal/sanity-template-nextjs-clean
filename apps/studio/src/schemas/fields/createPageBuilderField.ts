import { defineField } from 'sanity';

import { groupTypes } from '@/constants/groups';

import type { ArrayOfType } from 'sanity';

type CreateBuilderField = (of: ArrayOfType[]) => ReturnType<typeof defineField>;

export const createPageBuilderField: CreateBuilderField = (of) =>
  defineField({
    title: 'Page Builder',
    name: 'pageBuilder',
    type: 'array',
    group: groupTypes.CONTENT,
    of,
    options: {
      insertMenu: {
        views: [
          {
            name: 'grid',
          },
        ],
      },
    },
    validation: (rule) =>
      rule.required().min(1).error('At least one module is required for the content.'),
  });
