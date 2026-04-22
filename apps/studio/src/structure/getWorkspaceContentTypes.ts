import { userRoles } from '@/constants/objects';
import contentTypes from '@/structure/contentTypes';
import { getUserRoles } from '@/workspace/userRoles';

import type {
  GetContentTypes,
  GetRolesWithDefaults,
  GetWorkspaceContentTypes,
} from '@/structure/@types/common.types';

const getRolesWithDefaults: GetRolesWithDefaults = (roles) => [...roles, userRoles.ADMINISTRATOR];

const getContentTypes: GetContentTypes = (workspace, types, currentUser, id) =>
  types.reduce<ReturnType<GetContentTypes>>((acc, contentType, index) => {
    const { workspaces: contentTypeWorkspaces, roles, children } = contentType;

    const contentTypeObj = {
      ...contentType,
      id: [...id.split('.'), index + 1].join('.'),
    };

    const userHasAccess = getUserRoles({ currentUser }).some((role) =>
      getRolesWithDefaults(roles).includes(role),
    );

    if (!userHasAccess) return acc;

    if (children && children.length > 0) {
      if ((contentTypeWorkspaces as string[]).includes(workspace)) {
        acc.push({
          ...contentTypeObj,
          children: getContentTypes(workspace, children, currentUser, contentTypeObj.id),
        });
      }

      return acc;
    }

    if ((contentTypeWorkspaces as string[]).includes(workspace)) {
      acc.push({ ...contentTypeObj, children: [] });
    }

    return acc;
  }, []);

export const getWorkspaceContentTypes: GetWorkspaceContentTypes = (workspace, currentUser) =>
  getContentTypes(workspace, contentTypes, currentUser, '1');
