import type { ListBuilder, StructureBuilder } from 'sanity/structure';

import type { ContentTypes, ContentTypesExtended } from '@/structure/@types/contentTypes.types';

// Get workspace sites

export type GetContentTypes = (contentTypes: ContentTypes[], id: string) => ContentTypesExtended[];

// Render content type

export type RenderContentType = (
  S: StructureBuilder,
  contentType: ContentTypesExtended,
) => Parameters<ListBuilder['items']>[0][number] | null;
