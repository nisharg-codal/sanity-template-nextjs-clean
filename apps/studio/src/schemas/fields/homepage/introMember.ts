import { TextIcon } from '@sanity/icons';
import { defineArrayMember, defineField } from 'sanity';

import { portableTextBlockField } from '@/schemas/overrides/portableTextBlockField';
import { validateNoEdgeSpaces } from '@/validators/validation';

export const introMember = defineArrayMember({
  title: 'Intro',
  name: 'intro',
  type: 'object',
  icon: TextIcon,
  preview: {
    select: {
      title: 'headline',
    },
    prepare({ title }) {
      return {
        title: title ?? 'Intro',
      };
    },
  },
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required().custom(validateNoEdgeSpaces),
    }),
    defineField({
      ...portableTextBlockField,
      validation: (rule) => rule.required(),
    }),
  ],
});
