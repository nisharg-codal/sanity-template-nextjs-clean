import { rolesContentTypes } from '@/structure/contentTypes/roles';
import { structureBuilderContentTypes } from '@/structure/contentTypes/structureBuilder';
import { templatesContentTypes } from '@/structure/contentTypes/templates';

import type { ContentTypes } from '@/structure/@types/contentTypes.types';

const contentTypes: ContentTypes[] = [
  ...structureBuilderContentTypes,
  ...rolesContentTypes,
  ...templatesContentTypes,
];

export default contentTypes;
