import type { WorkspaceOptions } from 'sanity';
import type { StructureResolver } from 'sanity/structure';

import type { WorkspaceType } from '@/constants/@types/objects.types';

export interface WorkspaceConfig extends WorkspaceOptions {
  name: WorkspaceType;
  structure: StructureResolver;
}

export type Workspace = Omit<WorkspaceConfig, 'projectId'>;
