import { defineField, defineType } from 'sanity';

import { groups, groupTypes } from '@/constants/groups';

export const seoType = defineType({
  title: 'SEO',
  type: 'object',
  name: 'seo',
  groups,
  description: 'Customize SEO for the page',
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    defineField({
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description:
        'Title to appear in tab within web browsers. Include relevant keywords, keep concise (ideally under 65 characters). Improves click-through rate (CTR) in search results.',
    }),
    defineField({
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'string',
      description:
        'Use unique and compelling meta descriptions (ideally under 155 characters) for each page. Encourages clicks in search results. (Optional)',
    }),
  ],
});

export const seoField = defineField({
  title: 'SEO',
  name: 'seo',
  type: 'seo',
  group: groupTypes.SEO,
});
