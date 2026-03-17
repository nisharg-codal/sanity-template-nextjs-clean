import { createImageUrlBuilder } from '@sanity/image-url';

import { envs } from '@/config';

import type { SanityImageSource } from '@sanity/image-url';

const { NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET } = envs;

const builder = createImageUrlBuilder({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
});

export const urlForImage = (source: SanityImageSource): string =>
  builder.image(source).auto('format').quality(100).url();
