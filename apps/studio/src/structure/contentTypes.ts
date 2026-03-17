import { ComponentIcon } from '@sanity/icons';

import { authorType } from '@/schemas/documents/authorType';
import { homepageType } from '@/schemas/documents/homepageType';

import type { ContentTypes } from '@/structure/@types/contentTypes.types';

const contentTypes = [
  {
    title: homepageType.title,
    schemaType: homepageType.name,
    icon: homepageType.icon,
    singleton: true,
  },
  {
    title: authorType.title,
    schemaType: authorType.name,
    icon: authorType.icon,
  },
  {
    title: 'Drawer Example',
    icon: ComponentIcon,
    children: [
      {
        title: authorType.title,
        schemaType: authorType.name,
        icon: authorType.icon,
      },
    ],
  },
] satisfies ContentTypes[];

export default contentTypes;
