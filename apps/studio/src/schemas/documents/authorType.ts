import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { groups } from '@/constants/groups';
import { schemaNames } from '@/constants/objects/schemaNames';
import { customOptionalImageType } from '@/schemas/objects/customImageType';
import { validateNoEdgeSpaces } from '@/validators/validation';

import type { SlugValue } from 'sanity';

export const authorType = defineType({
  title: 'Author',
  name: schemaNames.AUTHOR,
  type: 'document',
  icon: UserIcon,
  groups,
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'avatar',
    },
  },
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().custom(validateNoEdgeSpaces),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().custom<SlugValue>((value) => validateNoEdgeSpaces(value?.current)),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (rule) => rule.custom(validateNoEdgeSpaces),
    }),
    defineField({
      title: 'Avatar',
      name: 'avatar',
      type: customOptionalImageType.name,
      validation: (rule) => rule.required(),
    }),
  ],
});
