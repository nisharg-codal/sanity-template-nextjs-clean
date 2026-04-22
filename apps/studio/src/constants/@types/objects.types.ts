import type { ValueOf } from 'type-fest';

import type { userRoles, workspaceTypes } from '@/constants/objects';

export type UserRole = ValueOf<typeof userRoles>;

export type WorkspaceType = ValueOf<typeof workspaceTypes>;
