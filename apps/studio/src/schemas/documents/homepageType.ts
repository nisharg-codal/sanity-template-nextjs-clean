import { HomeIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

import { groups, groupTypes } from '@/constants/groups';
import { createPageBuilderField } from '@/schemas/fields/createPageBuilderField';
import { heroField } from '@/schemas/fields/homepage/heroField';
import { introMember } from '@/schemas/fields/homepage/introMember';
import { seoField } from '@/schemas/objects/seoType';

export const homepageType = defineType({
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  icon: HomeIcon,
  groups,
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.description',
    },
  },
  fields: [
    defineField({
      ...heroField,
      group: groupTypes.HERO,
    }),
    createPageBuilderField([defineArrayMember(introMember)]),
    seoField,
  ],
});
