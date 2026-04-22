import { envs } from '@/config';
import { workspaceTypes } from '@/constants/objects/types';

import type { SetOptional } from 'type-fest';

import type { Workspace } from '@/workspace/@types/common.types';

const baseWorkspaces = [
  {
    name: workspaceTypes.STRUCTURE_BUILDER,
    title: 'Structure Builder',
  },
  {
    name: workspaceTypes.ROLES,
    title: 'Roles',
  },
] satisfies SetOptional<Workspace, 'basePath' | 'dataset'>[];

const workspaces = baseWorkspaces.map((item) => ({
  ...item,
  basePath: `/${item.name}`,
  dataset: envs.SANITY_STUDIO_DATASET,
})) satisfies Workspace[];

export default workspaces;
