import type { IconComponent } from '@sanity/icons';
import type { ComponentType, ReactNode } from 'react';
import type { CurrentUser } from 'sanity';

import type { UserRole, WorkspaceType } from '@/constants/@types/objects.types';

export type ContentTypeFilter = string[] | ((currentUser: CurrentUser) => string[]);

export interface ContentTypes {
  title?: string;
  schemaType?: string;
  icon?: IconComponent | ComponentType | ReactNode;
  roles: UserRole[];
  workspaces: WorkspaceType[];
  children?: ContentTypes[];
  singleton?: boolean;
  filters?: ContentTypeFilter;
  filterParams?: Record<string, unknown>;
  hideAddButton?: boolean;
  isDivider?: boolean;
  isPlural?: boolean;
}

export interface ContentTypesExtended extends ContentTypes {
  id: string;
  children: ContentTypesExtended[];
}
