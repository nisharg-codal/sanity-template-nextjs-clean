import { defineField } from 'sanity';

import { validateNoEdgeSpaces } from '@/validators/validation';

export const editorTitleField = defineField({
  title: 'Editor Title',
  name: 'editorTitle',
  type: 'string',
  description: 'Internal document title for searching. This is not displayed on the frontend.',
  validation: (rule) => rule.required().custom(validateNoEdgeSpaces),
});
