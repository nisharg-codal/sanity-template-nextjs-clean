import type { CurrentUser } from 'sanity';
import type { ListBuilder, StructureBuilder } from 'sanity/structure';

import type { UserRole, WorkspaceType } from '@/constants/@types/objects.types';
import type { ContentTypes, ContentTypesExtended } from '@/structure/@types/contentTypes.types';

// Get workspace sites

export type GetRolesWithDefaults = (roles: UserRole[]) => UserRole[];

export type GetContentTypes = (
  workspace: WorkspaceType,
  contentTypes: ContentTypes[],
  currentUser: CurrentUser,
  id: string,
) => ContentTypesExtended[];

export type GetWorkspaceContentTypes = (
  workspace: WorkspaceType,
  currentUser: CurrentUser,
) => ContentTypesExtended[];

// Render content type

export type RenderContentType = (
  S: StructureBuilder,
  contentType: ContentTypesExtended,
  currentUser: CurrentUser,
) => Parameters<ListBuilder['items']>[0][number] | null;
