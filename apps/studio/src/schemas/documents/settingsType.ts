import { CogIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { groups } from '@/constants/groups';
import { schemaNames } from '@/constants/objects/schemaNames';
import { customImageType } from '@/schemas/objects/customImageType';
import { validateNoEdgeSpaces } from '@/validators/validation';

export const settingsType = defineType({
  title: 'Settings',
  name: schemaNames.SETTINGS,
  type: 'document',
  icon: CogIcon,
  groups,
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'avatar.image',
    },
  },
  fields: [
    defineField({
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      validation: (rule) => rule.required().custom(validateNoEdgeSpaces),
    }),
    defineField({
      title: 'Company Logo',
      name: 'companyLogo',
      type: customImageType.name,
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Maintenance Mode',
      name: 'maintenanceMode',
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
  ],
});
