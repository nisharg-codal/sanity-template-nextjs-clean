import type { Language } from '@sanity/document-internationalization';
import type { WorkspaceOptions } from 'sanity';

import type { WorkspaceType } from '@/constants/@types/objects.types';

export interface WorkspaceConfig extends WorkspaceOptions {
  name: WorkspaceType;
}

export type Workspace = Omit<WorkspaceConfig, 'projectId'>;

export type WorkspaceTranslationLanguage = Language;

export type ActionPolicy = 'default' | string[];

export interface RoleSchemaActionsPolicy {
  schemas: Partial<Record<string, ActionPolicy>>;
  fallbackActions?: ActionPolicy;
}
