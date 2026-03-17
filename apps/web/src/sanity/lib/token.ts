import 'server-only';

import { envs } from '@/config';

const { SANITY_API_READ_TOKEN } = envs;

export const token = SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN');
}
