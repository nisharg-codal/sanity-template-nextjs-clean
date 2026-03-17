import { defineEnableDraftMode } from 'next-sanity/draft-mode';

import { sanityClient } from '@/sanity/lib/client';
import { token } from '@/sanity/lib/token';

export const { GET } = defineEnableDraftMode({
  client: sanityClient.withConfig({ token }),
});
