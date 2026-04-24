import { envs } from '@/config';
import { workspaceTypes } from '@/constants/objects/types';
import structure from '@/structure';
import defaultStructure from '@/structure/defaultStructure';

import type { SetOptional } from 'type-fest';

import type { Workspace } from '@/workspace/@types/common.types';

const baseWorkspaces = [
  {
    name: workspaceTypes.DEFAULT_STRUCTURE_BUILDER,
    title: 'Default Structure Builder',
    structure: defaultStructure,
  },
  {
    name: workspaceTypes.CUSTOM_STRUCTURE_BUILDER,
    title: 'Custom Structure Builder',
    structure,
  },
  // {
  //   name: workspaceTypes.TOOLS,
  //   title: 'Tools',
  //   structure,
  // },
] satisfies SetOptional<Workspace, 'basePath' | 'dataset'>[];

const workspaces = baseWorkspaces.map((item) => ({
  ...item,
  basePath: `/${item.name}`,
  dataset: envs.SANITY_STUDIO_DATASET,
})) satisfies Workspace[];

export default workspaces;
