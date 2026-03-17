import { DocumentIcon } from '@sanity/icons';
import { defineField } from 'sanity';

import { customImageType } from '@/schemas/objects/customImageType';
import { portableTextBlockField } from '@/schemas/overrides/portableTextBlockField';

export const heroField = defineField({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: DocumentIcon,
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'backgroundImage.image',
    },
  },
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    portableTextBlockField,
    defineField({
      title: 'Background Image',
      name: 'backgroundImage',
      type: customImageType.name,
      validation: (rule) => rule.required(),
    }),
  ],
});
