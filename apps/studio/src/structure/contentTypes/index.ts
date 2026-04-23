import { rolesContentTypes } from '@/structure/contentTypes/roles';
import { structureBuilderContentTypes } from '@/structure/contentTypes/structureBuilder';

import type { ContentTypes } from '@/structure/@types/contentTypes.types';

const contentTypes: ContentTypes[] = [...structureBuilderContentTypes, ...rolesContentTypes];

export default contentTypes;
