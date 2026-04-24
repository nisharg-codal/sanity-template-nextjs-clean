import type { CurrentUser } from 'sanity';
import type { StructureBuilder, StructureResolverContext } from 'sanity/structure';
import type { SetNonNullable } from 'type-fest';

import type { UserRole, WorkspaceType } from '@/constants/@types/objects.types';
import type {
  ContentTypeRaw,
  ContentTypes,
  ContentTypesExtended,
} from '@/structure/@types/contentTypes.types';

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
  context: SetNonNullable<StructureResolverContext, 'currentUser'>,
  contentType: ContentTypesExtended,
) => ReturnType<ContentTypeRaw>;
