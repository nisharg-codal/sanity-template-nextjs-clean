import { envs } from '@/config';
import { workspaceTypes } from '@/constants/objects/types';
import structure from '@/structure';
import manualStructure from '@/structure/manualStructure';

import type { SetOptional } from 'type-fest';

import type { Workspace } from '@/workspace/@types/common.types';

const baseWorkspaces = [
  {
    name: workspaceTypes.OLD_STRUCTURE_BUILDER,
    title: 'Old Structure Builder',
    structure: manualStructure,
  },
  {
    name: workspaceTypes.STRUCTURE_BUILDER,
    title: 'Structure Builder',
    structure,
  },
  {
    name: workspaceTypes.ROLES,
    title: 'Roles',
    structure,
  },
] satisfies SetOptional<Workspace, 'basePath' | 'dataset'>[];

const workspaces = baseWorkspaces.map((item) => ({
  ...item,
  basePath: `/${item.name}`,
  dataset: envs.SANITY_STUDIO_DATASET,
})) satisfies Workspace[];

export default workspaces;
