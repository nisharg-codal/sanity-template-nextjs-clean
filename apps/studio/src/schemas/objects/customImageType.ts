import { defineField, defineType } from 'sanity';

import { stringValidationMessages } from '@/constants/messages';
import { validateNoEdgeSpaces } from '@/validators/validation';

export const customOptionalImageType = defineType({
  title: 'Image',
  name: 'customOptionalImage',
  type: 'object',
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Alt',
      name: 'alt',
      type: 'string',
      description: 'Alternative text for screen readers and SEO',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as CustomImage;
          const { _ref: ref } = parent?.image?.asset ?? {};
          const isRequired = !!(ref && !value?.trim());

          if (value) return validateNoEdgeSpaces(value);
          return isRequired ? stringValidationMessages.REQUIRED : true;
        }),
    }),
  ],
});

export const customImageType = defineType({
  title: 'Image',
  name: 'customImage',
  type: 'object',
  fields: [
    defineField({
      ...customOptionalImageType.fields[0],
      validation: (rule) => rule.required(),
    }),
    defineField({
      ...customOptionalImageType.fields[1],
      validation: (rule) => rule.required().custom<string>((value) => validateNoEdgeSpaces(value)),
    }),
  ],
});
