import { EditIcon, ImageIcon, SearchIcon } from '@sanity/icons';

export const groupTypes = {
  NONE: undefined,
  CONTENT: 'content',
  HERO: 'hero',
  SEO: 'seo',
} as const;

export const groups = [
  {
    title: 'Content',
    name: groupTypes.CONTENT,
    icon: EditIcon,
  },
  {
    title: 'Hero',
    name: groupTypes.HERO,
    icon: ImageIcon,
  },
  {
    title: 'SEO',
    name: groupTypes.SEO,
    icon: SearchIcon,
  },
];
