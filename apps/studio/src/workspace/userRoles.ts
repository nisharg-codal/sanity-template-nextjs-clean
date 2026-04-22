import { userRoles } from '@/constants/objects';

import type { CurrentUser, DocumentActionsContext } from 'sanity';

import type { UserRole } from '@/constants/@types/objects.types';

// Check if user has any of the allowed roles
type HasAllowedRole = (roles: UserRole[], allowedRoles: string[]) => boolean;

export const hasAllowedRole: HasAllowedRole = (roles, allowedRoles) => {
  if (allowedRoles.length === 0) return true;

  if (roles.includes(userRoles.ADMINISTRATOR)) return true;

  return roles.some((role) => allowedRoles.includes(role));
};

// Is Valid role

const isValidRole = (role: UserRole): role is UserRole => Object.values(userRoles).includes(role);

// Return valid user roles

type GetUserRoles = (
  context:
    | Pick<DocumentActionsContext, 'currentUser'>
    | Record<'currentUser', Omit<CurrentUser, 'role'> | null>,
) => UserRole[];

export const getUserRoles: GetUserRoles = (context) => {
  const { currentUser } = context;

  if (!currentUser) return [];

  const defaultRoles =
    'projectId' in context && currentUser.id === context.projectId ? [userRoles.ADMINISTRATOR] : [];

  return currentUser.roles.reduce<UserRole[]>((acc, role) => {
    const { name } = role || {};
    const roleName = name as UserRole;

    if (isValidRole(roleName)) acc.push(roleName);

    return acc;
  }, defaultRoles);
};
